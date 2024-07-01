function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEditDocumentFill = function SvgEditDocumentFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-80v-800h400l240 240v113L500-228v148H160Zm400 0v-123l263-262 122 122L683-80H560Zm263-224 37-39-37-37-38 38 38 38ZM520-600h220L520-820l220 220-220-220v220Z",
    fill: "currentColor"
  }));
};
export default SvgEditDocumentFill;