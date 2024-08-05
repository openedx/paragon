function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNotEqual = function SvgNotEqual(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 9.998H5v-2h14zm0 6H5v-2h14z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.08 4.605 1.84.79-6 14-1.84-.79z",
    fill: "currentColor"
  }));
};
export default SvgNotEqual;