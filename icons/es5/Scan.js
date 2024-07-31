function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScan = function SvgScan(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-80v-230h60v170h520v-170h60v230H160Zm0-410v-390h421l219 219v171h-60v-144H551v-186H220v330h-60ZM40-370v-60h880v60H40Zm440-120Zm0 180Z",
    fill: "currentColor"
  }));
};
export default SvgScan;