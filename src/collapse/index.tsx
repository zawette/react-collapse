import React, { ReactElement, useState, useRef, useLayoutEffect } from "react";
import "./index.css";
import useWindowHeight from "./useWindowHeight";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  className: string;
  initExpanded: boolean;
  onToggle?: (prevState: boolean) => any;
}

function Collapse(props: Props): ReactElement {
  // todo: nested accordion; method to expand from parent;style att
  const [isExpanded, setisExpanded] = useState(true);
  const [contentSize, setcontentSize] = useState({ height: 0, width: 0 });
  const contentRef = useRef<HTMLDivElement>(null);
  let [windowHeight, windowWidth] = useWindowHeight();
  const setContentDivSize = (height: number) => {
    if (contentRef.current) {
      contentRef.current.style.height = height + "px";
    }
  };
  const resetContentDivSize = () => {
    if (contentRef.current) {
      contentRef.current.style.height = "";
    }
  };

  const toggle = () => {
    !isExpanded
      ? setContentDivSize(contentSize.height)
      : setContentDivSize(0);
    setisExpanded(!isExpanded);
    props.onToggle && props.onToggle(isExpanded);
  };

  useLayoutEffect(() => {
    resetContentDivSize();
    let height = contentRef.current?.scrollHeight || 0;
    let width = contentRef.current?.scrollWidth || 0;
    setcontentSize({ height, width });
    if (!props.initExpanded) {
      setContentDivSize(0);
      setisExpanded(false);
    }
  }, [windowHeight, windowWidth]);

  return (
    <div className={`${props.className} zawCollapse`}>
      <div className="header" onClick={() => toggle()}>
        {props.header}
        <button className="expandBtn">{isExpanded ? "▲" : "▼"}</button>
      </div>

      <div className="content" ref={contentRef}>
        {props.children}
      </div>
    </div>
  );
}

Collapse.defaultProps = {
  className: "",
  initExpanded: false,
} as Partial<Props>;

export default Collapse;
