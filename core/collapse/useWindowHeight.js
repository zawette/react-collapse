"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useWindowSize() {
    var _a = react_1.useState(window.innerHeight), WindowHeight = _a[0], setWindowHeight = _a[1];
    var _b = react_1.useState(window.innerWidth), WindowWidth = _b[0], setWindowWidth = _b[1];
    react_1.useEffect(function () {
        function setSize() {
            setWindowHeight(window.innerHeight);
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", setSize);
        return function () { return window.removeEventListener("resize", setSize); };
    }, [WindowHeight, WindowWidth, setWindowHeight, setWindowWidth]);
    return [WindowHeight, WindowWidth];
}
exports.default = useWindowSize;
