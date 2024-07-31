function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCarTagFill = function SvgCarTagFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-354l94-286h216v60H218l-55 166h352l117 110q-22 2-36.5 18T581-368q0 22.5 16.33 38.25Q613.67-314 637-314q23 0 38.5-16t15.5-39l19 18 90-90v321h-80v-84H160v84H80Zm165.76-194q23.24 0 38.74-15.75Q300-345.5 300-368q0-23.33-15.75-39.67Q268.5-424 246-424q-23.33 0-39.67 16.26Q190-391.47 190-368.24q0 23.24 16.26 38.74 16.27 15.5 39.5 15.5ZM704-429 450-684v-226h225l255 255-226 226ZM600-730q12 0 21-8.63 9-8.62 9-21.37 0-12-9-21t-21.5-9q-12.5 0-21 9t-8.5 21.5q0 12.5 8.63 21 8.62 8.5 21.37 8.5Z",
    fill: "currentColor"
  }));
};
export default SvgCarTagFill;