import React, { ReactElement, useState, useRef, useLayoutEffect } from "react";
import styles from "./Collapse.module.scss";

interface Props {
    children: React.ReactNode
}

export default function Collapse(props: Props): ReactElement {
  // todo: contentHeight no need for useState;
  const [isExpanded, setisExpanded] = useState(true);
  const [contentHeight, setcontentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const setContentDivHeight = (height: number) => {
    if (contentRef.current)
      contentRef.current.style.height = "" + height + "px";
  };
  const tempFunc = (ex: boolean) => {
    ex ? setContentDivHeight(contentHeight) : setContentDivHeight(0);
    setisExpanded(ex);
    console.log(contentRef);
  };

  useLayoutEffect(() => {
    setcontentHeight(contentRef.current?.clientHeight || 0);
    setContentDivHeight(0);
    return setisExpanded(false);
  }, []);

  return (
    <div className={styles.zawCollapse}>
      <div className="top">
        temp stuff
        <button className="expandBtn" onClick={() => tempFunc(!isExpanded)}>
          {isExpanded ?  "▲" : "▼" }
        </button>
      </div>

      <div className="content" ref={contentRef}>
        {props.children}
      </div>
    </div>
  );
}
