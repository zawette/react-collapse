import React, { ReactElement, useState, useRef, useLayoutEffect } from "react";
import styles from "./Collapse.module.scss";
import useWindowHeight from "./useWindowHeight";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  className:string;
  onToggle?:(prevState: boolean) => any;
}

function Collapse(props: Props): ReactElement {
  // todo: handle when the window width changes; expand from parent; 
  const [isExpanded, setisExpanded] = useState(false);
  const [contentHeight, setcontentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  let windowHeight=useWindowHeight();
  const setContentDivHeight = (height: number) => {
    if (contentRef.current) contentRef.current.style.height = height + "px";
  };
  const toggle = () => {
    !isExpanded ? setContentDivHeight(contentHeight) : setContentDivHeight(0);
    setisExpanded(!isExpanded);
    props.onToggle && props.onToggle(isExpanded);
  };

  // init
  useLayoutEffect(() => {
    console.log('contentRef.current?.clientHeight ', contentRef.current?.clientHeight )
    console.log('contentRef.current?.offsetHeight ', contentRef.current?.offsetHeight )
    console.log('contentRef.current?.scrollHeight ', contentRef.current?.scrollHeight )
    setcontentHeight(contentRef.current?.scrollHeight || 0);
    setContentDivHeight(0);
  }, [windowHeight]);

  
  return (
    <div className={`${props.className} ${styles.zawCollapse}`}>
      <div className="header" onClick={() => toggle()}>
        {props.header}
        <button className="expandBtn">
          {isExpanded ? "▲" : "▼"}
        </button>
      </div>

      <div className="content" ref={contentRef}>
        {props.children}
      </div>
    </div>
  );
}

Collapse.defaultProps = {
    className:""
  } as Partial<Props>;

  export default Collapse;