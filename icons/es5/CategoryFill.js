function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCategoryFill = function SvgCategoryFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m261-526 220-354 220 354H261ZM705.65-80Q633-80 582.5-130.65q-50.5-50.64-50.5-123Q532-326 582.65-377q50.64-51 123-51Q778-428 829-377.15q51 50.86 51 123.5 0 72.65-50.85 123.15Q778.29-80 705.65-80ZM120-105v-304h304v304H120Z",
    fill: "currentColor"
  }));
};
export default SvgCategoryFill;