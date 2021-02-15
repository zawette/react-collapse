import * as React from 'react';
import { useRef, useState } from 'react';
import styles from './Collapse.module.css';

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  duration?: number;
  className?: string;
  Key?: string;
  initExpanded?: boolean;
  onToggle?: (prevState: boolean) => any;
}

interface RefType {
  [key: string]: React.ReactNode;
}

const Collapse = (props: Props, ref: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  let currentRef = props.Key && ref.current[props.Key];

  const toggle = () => {
    headerRef.current!.style.pointerEvents = 'none';
    contentRef.current!.style.display = 'block';
    const contentHeight = contentRef.current?.offsetHeight;
    contentRef.current!.style.transitionDuration = props.duration + 'ms';
    if (!isExpanded) {
      setIsExpanded(true);
      contentRef.current!.style.height = 0 + 'px';
      setTimeout(() => {
        contentRef.current!.style.height = contentHeight! + 'px';
      }, 10);
      setTimeout(() => {
        contentRef.current!.style.height = 'auto';
        headerRef.current!.style.pointerEvents = '';
      }, props.duration!);
    } else {
      setIsExpanded(false);
      contentRef.current!.style.height = contentHeight! + 'px';
      setTimeout(() => {
        contentRef.current!.style.height = 0 + 'px';
      }, 10);
      setTimeout(() => {
        contentRef.current!.style.display = 'none';
        contentRef.current!.style.height = 'auto';
        headerRef.current!.style.pointerEvents = '';
      }, props.duration!);
    }
  };

  return (
    <div
      className={`${props.className} ${styles.zawCollapse}`}
      ref={element => (currentRef = element)}
    >
      <div
        className={styles.zawCollapse_header}
        onClick={() => toggle()}
        ref={headerRef}
      >
        {props.header}
        <button className={styles.zawCollapse_header_expandBtn}>
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      <div className={styles.zawCollapse_content} ref={contentRef}>
        {props.children}
      </div>
    </div>
  );
};
const CollapseComponent = React.forwardRef<RefType, Props>(Collapse);
CollapseComponent.defaultProps = {
  className: '',
  duration: 900,
  initExpanded: false,
} as Partial<Props>;

export default CollapseComponent;
