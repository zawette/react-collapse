import * as React from 'react';
import { useRef, useState } from 'react';
import styles from './Collapse.module.css';

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  duration?: number;
  'aria-level'?: number;
  className?: string;
  Key?: string;
  initExpanded?: boolean;
  isExpanded?: boolean;
  onClick?: (prevState: boolean) => any;
}

interface RefType {
  [key: string]: React.ReactNode;
}

const Collapse = (props: Props, ref: any) => {
  const [isExpanded, setIsExpanded] = useState(props.initExpanded);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  let currentRef = props.Key && ref.current[props.Key];

  const toggle = () => {
    headerRef.current!.style.pointerEvents = 'none';
    contentRef.current!.style.display = 'block';
    const contentHeight = contentRef.current?.offsetHeight;
    contentRef.current!.style.transitionDuration = props.duration + 'ms';
    if (isExpanded) {
      contentRef.current!.style.height = 0 + 'px';
      setTimeout(() => {
        contentRef.current!.style.height = contentHeight! + 'px';
      }, 10);
      setTimeout(() => {
        contentRef.current!.style.height = 'auto';
        headerRef.current!.style.pointerEvents = '';
      }, props.duration!);
    } else {
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

  const onClick = () => {
    props.onClick?.(isExpanded!);
    if (props.isExpanded === null || props.isExpanded === undefined)
      setIsExpanded(!isExpanded);
  };

  React.useEffect(() => {
    toggle();
  }, [isExpanded]);

  React.useEffect(() => {
    if (!(props.isExpanded === null || props.isExpanded === undefined))
      setIsExpanded(props.isExpanded!);
  }, [props.isExpanded]);

  return (
    <div
      className={`${props.className} ${styles.zawCollapse}`}
      ref={element => (currentRef = element)}
      role="details"
    >
      <div
        className={`zawCollapse_header `}
        onClick={onClick}
        onKeyPress={onClick}
        ref={headerRef}
        role="heading"
        aria-level={props['aria-level']}
      >
        <div
          className={`zawCollapse_header_btn`}
          id="accordion_header_rzc"
          aria-controls="accordion_content_rzc"
          role="button"
          aria-disabled={false}
          aria-expanded={isExpanded}
          tabIndex={0}
        >
          {props.header}
          <i className={`zawCollapse_header_btn_icon`}>
            {isExpanded ? '▲' : '▼'}
          </i>
        </div>
      </div>

      <div
        className={`zawCollapse_content`}
        id="accordion_content_rzc"
        ref={contentRef}
        aria-labelledby="accordion_header_rzc"
        aria-hidden={!isExpanded}
      >
        {props.children}
      </div>
    </div>
  );
};
const CollapseComponent = React.forwardRef<RefType, Props>(Collapse);
CollapseComponent.defaultProps = {
  className: '',
  'aria-level': 3,
  duration: 700,
  initExpanded: false,
} as Partial<Props>;

export default CollapseComponent;
