import React, { ReactElement, useState, useRef,useLayoutEffect } from 'react';
import styles from "./Collapse.module.scss";

interface Props {
    
}


export default function Collapse({}: Props): ReactElement {
    const [expand, setexpand] = useState(true);
    const [contentHeight, setcontentHeight] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null);
    const tempFunc= ()=>{
        console.log(contentHeight)
        if(contentRef.current) contentRef.current.style.height = expand ?  "" + contentHeight: "0"
        setexpand(!expand)
    }

    useLayoutEffect(()=>{
    setcontentHeight(contentRef.current?.clientHeight || 0);
return setexpand(false)
},[])

    return (
        <div className={styles.zawCollapse}>
            <div className="top">
                temp stuff
                <button className="expandBtn" onClick={()=> tempFunc()}>^</button>
            </div>

            <div className="content" ref={contentRef}>
                Proident aute elit eiusmod eu consequat. Nulla mollit fugiat qui incididunt aliquip aliqua eu occaecat ea et incididunt. Non ex est consequat do aliqua aliqua ipsum aute commodo eu consequat. Commodo dolor aliqua nostrud qui aliquip tempor magna nulla non voluptate officia eiusmod. Ex Lorem mollit officia labore ut nisi occaecat anim cillum eiusmod mollit et laboris sint.
            </div>
        </div>
    )
}
