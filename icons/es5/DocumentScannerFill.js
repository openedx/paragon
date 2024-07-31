function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDocumentScannerFill = function SvgDocumentScannerFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-745v-175h175v60H140v115H80Zm740 0v-115H705v-60h175v175h-60ZM80-40v-175h60v115h115v60H80Zm625 0v-60h115v-115h60v175H705ZM200-160v-640h560v640H200Zm170-410h220v-60H370v60Zm0 120h220v-60H370v60Zm0 120h220v-60H370v60Z",
    fill: "currentColor"
  }));
};
export default SvgDocumentScannerFill;