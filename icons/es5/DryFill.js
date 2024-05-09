function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDryFill = function SvgDryFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M760-80H80v-427l374-241 54 54-84 134h376v60H480v80h400v60H480v80h360v60H480v80h280v60ZM619-650q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 .5 66.5T643-791q24 32 32 64.5t1 76.5h-57Zm160 0q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 .5 66.5T803-791q24 32 32 64.5t1 76.5h-57Z",
    fill: "currentColor"
  }));
};
export default SvgDryFill;