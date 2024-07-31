function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDetectorOfflineFill = function SvgDetectorOfflineFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m376-120-42-42 104-104-104-104 42-42 104 104 104-104 42 42-104 104 104 104-42 42-104-104-104 104Zm-75-540 18 60h322l18-60H301Zm-26 120-38-120H120v-180h720v180H723l-44 120H275Z",
    fill: "currentColor"
  }));
};
export default SvgDetectorOfflineFill;