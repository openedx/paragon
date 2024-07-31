function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFlatwareFill = function SvgFlatwareFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-120v-411q-33 0-56.5-23.5T120-611v-206q0-9 7-16t16-7q9 0 16.5 7t7.5 16v142h40v-142q0-9 7-16t16-7q9 0 16 7t7 16v142h40v-142q0-9 7.5-16t16.5-7q9 0 16 7t7 16v206q0 33-23.5 56.5T260-531v411h-60Zm280 0v-413q-41-23-62-62t-21-90q0-60 30.5-107.5T511-840q53 0 83.5 47.5T625-685q0 51-22 90t-63 62v413h-60Zm214 0v-720q58 5 102 45.5T840-694v244h-86v330h-60Z",
    fill: "currentColor"
  }));
};
export default SvgFlatwareFill;