function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWashFill = function SvgWashFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M760-80H80v-427l374-241 54 54-84 134h376v60H480v80h400v60H480v80h360v60H480v80h280v60Zm-50-580q-35 0-62.5-27.5T620-750q0-34 21-73.5t69-99.5q48 60 69 99.5t21 73.5q0 35-27.5 62.5T710-660Z",
    fill: "currentColor"
  }));
};
export default SvgWashFill;