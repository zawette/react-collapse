import * as React from 'react';
import { useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  className: string;
  Key?: string;
  initExpanded: boolean;
  onToggle?: (prevState: boolean) => any;
}

interface RefType {
  [key: string]: React.ReactNode;
}

const Collapse = (props: Props, ref: any) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  let currentRef = props.Key && ref.current[props.Key];
  const toggle = () => {};

  return (
    <div
      className={`${props.className} zawCollapse`}
      ref={element => (currentRef = element)}
    >
      <div className="zawCollapse-header" onClick={() => toggle()}>
        {props.header}
        <button className="zawCollapse-expandBtn">
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      <div className="zawCollapse-content" ref={contentRef}>
        {props.children}
      </div>
    </div>
  );
};
const CollapseComponent = React.forwardRef<RefType, Props>(Collapse);
CollapseComponent.defaultProps = {
  className: '',
  initExpanded: false,
} as Partial<Props>;

export default CollapseComponent;
