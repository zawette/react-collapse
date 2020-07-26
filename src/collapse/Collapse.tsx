import React, { ReactElement, useState, useRef, useLayoutEffect } from "react";
import styles from "./Collapse.module.scss";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
}

export default function Collapse(props: Props): ReactElement {
  // todo: handle when the window size changes
  const [isExpanded, setisExpanded] = useState(true);
  const [contentHeight, setcontentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const setContentDivHeight = (height: number) => {
    if (contentRef.current) contentRef.current.style.height = height + "px";
  };
  const toggle = (ex: boolean) => {
    ex ? setContentDivHeight(contentHeight) : setContentDivHeight(0);
    setisExpanded(ex);
  };

  useLayoutEffect(() => {
    setcontentHeight(contentRef.current?.clientHeight || 0);
    setContentDivHeight(0);
    return setisExpanded(false);
  }, []);

  return (
    <div className={styles.zawCollapse}>
      <div className="header" onClick={() => toggle(!isExpanded)}>
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
