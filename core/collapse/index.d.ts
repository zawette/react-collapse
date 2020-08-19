import React, { ReactElement } from "react";
import "./index.css";
interface Props {
    children: React.ReactNode;
    header: React.ReactNode;
    className: string;
    initExpanded: boolean;
    onToggle?: (prevState: boolean) => any;
}
declare function Collapse(props: Props): ReactElement;
declare namespace Collapse {
    var defaultProps: Partial<Props>;
}
export default Collapse;
