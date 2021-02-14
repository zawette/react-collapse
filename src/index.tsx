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
  let currentRef = props.Key && ref.current[props.Key];

  const toggle = () => {
    contentRef.current!.style.display = 'block';
    contentRef.current!.style.transitionDuration = props.duration + 'ms';
    const contentHeight = contentRef.current?.offsetHeight;
    const contentPadding = contentRef.current?.style.padding;
    if (!isExpanded) {
      setIsExpanded(true);
      contentRef.current!.style.height = 0 + 'px';
      setTimeout(() => {
        contentRef.current!.style.height = contentHeight + 'px';
      }, 30);
      setTimeout(() => {
        contentRef.current!.style.height = 'auto';
      }, 30 + props.duration!);
    } else {
      setIsExpanded(false);
      contentRef.current!.style.height = 0 + 'px';
      contentRef.current!.style.padding = 0 + 'px';
      setTimeout(() => {
        contentRef.current!.style.display = 'none';
        contentRef.current!.style.height = 'auto';
        contentRef.current!.style.padding = contentPadding!;
      }, props.duration!);
    }
  };

  return (
    <div
      className={`${props.className} ${styles.zawCollapse}`}
      ref={element => (currentRef = element)}
    >
      <div className={styles.zawCollapse_header} onClick={() => toggle()}>
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
  duration: 800,
  initExpanded: false,
} as Partial<Props>;

export default CollapseComponent;
