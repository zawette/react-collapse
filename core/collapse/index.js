"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./index.css");
var useWindowHeight_1 = __importDefault(require("./useWindowHeight"));
function Collapse(props) {
    var _a = react_1.useState(true), isExpanded = _a[0], setisExpanded = _a[1];
    var _b = react_1.useState({ height: 0, width: 0 }), contentSize = _b[0], setcontentSize = _b[1];
    var contentRef = react_1.useRef(null);
    var _c = useWindowHeight_1.default(), windowHeight = _c[0], windowWidth = _c[1];
    var setContentDivSize = function (height) {
        if (contentRef.current) {
            contentRef.current.style.height = height + "px";
        }
    };
    var resetContentDivSize = function () {
        if (contentRef.current) {
            contentRef.current.style.height = "";
        }
    };
    var toggle = function () {
        !isExpanded
            ? setContentDivSize(contentSize.height)
            : setContentDivSize(0);
        setisExpanded(!isExpanded);
        props.onToggle && props.onToggle(isExpanded);
    };
    react_1.useLayoutEffect(function () {
        var _a, _b;
        resetContentDivSize();
        var height = ((_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0;
        var width = ((_b = contentRef.current) === null || _b === void 0 ? void 0 : _b.scrollWidth) || 0;
        setcontentSize({ height: height, width: width });
        if (!props.initExpanded) {
            setContentDivSize(0);
            setisExpanded(false);
        }
    }, [windowHeight, windowWidth]);
    return (react_1.default.createElement("div", { className: props.className + " zawCollapse" },
        react_1.default.createElement("div", { className: "header", onClick: function () { return toggle(); } },
            props.header,
            react_1.default.createElement("button", { className: "expandBtn" }, isExpanded ? "▲" : "▼")),
        react_1.default.createElement("div", { className: "content", ref: contentRef }, props.children)));
}
Collapse.defaultProps = {
    className: "",
    initExpanded: false,
};
exports.default = Collapse;
