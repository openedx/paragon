function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgZoomInMapFill = function SvgZoomInMapFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m143-100-43-43 147-147H120v-60h230v230h-60v-127L143-100Zm674 0L670-247v127h-60v-230h230v60H713l147 147-43 43ZM120-610v-60h127L100-817l43-43 147 147v-127h60v230H120Zm490 0v-230h60v127l148-148 43 43-148 148h127v60H610Z",
    fill: "currentColor"
  }));
};
export default SvgZoomInMapFill;