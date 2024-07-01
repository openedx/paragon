function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFoldedHands = function SvgFoldedHands(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M631-320v-102l-49-90q-18 2-29.5 15.5T541-465v227l96 158h-70l-86-141v-244q0-35 20-62.5t52-38.5l-66-122q-20-38-16.5-80t32.5-71l60-60 278 324 40 495h-61l-38-472-222-259-14 14q-14 14-17 33.5t6 36.5l156 290v117h-60Zm-361 0v-117l156-290q9-17 6-36.5T415-797l-14-14-222 259-38 472H80l40-495 278-324 60 60q29 29 32.5 71T474-688l-66 122q32 11 52 38.5t20 62.5v244L394-80h-70l96-158v-227q0-18-11.5-31.5T379-512l-49 90v102h-60Z",
    fill: "currentColor"
  }));
};
export default SvgFoldedHands;