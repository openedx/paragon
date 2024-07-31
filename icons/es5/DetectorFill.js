function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDetectorFill = function SvgDetectorFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-120q-88 0-168.5-33T169-249l43-43q54 54 123 83t145 29q76 0 145.5-28.5T749-291l42 42q-63 62-143 95.5T480-120Zm0-160q-56 0-107.5-21T282-363l42-41q31 32 71.5 48t84.5 16q44 0 84.5-16t71.5-48l42 42q-39 40-90.5 61T480-280ZM301-660l18 60h322l18-60H301Zm-26 120-38-120H120v-180h720v180H723l-44 120H275Z",
    fill: "currentColor"
  }));
};
export default SvgDetectorFill;