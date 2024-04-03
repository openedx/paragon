function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPropane = function SvgPropane(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.75 6H16V3H8v3h-.75C3.97 6 1.1 8.53 1 11.82A6.001 6.001 0 0 0 7 18v3h2v-3h6v3h2v-3c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6zM10 5h4v1h-4V5z",
    fill: "currentColor"
  }));
};
export default SvgPropane;