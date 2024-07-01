function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDetectorStatusFill = function SvgDetectorStatusFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M438-120 310-248l43-42 85 85 169-170 43 43-212 212ZM301-660l18 60h322l18-60H301Zm-26 120-38-120H120v-180h720v180H723l-44 120H275Z",
    fill: "currentColor"
  }));
};
export default SvgDetectorStatusFill;