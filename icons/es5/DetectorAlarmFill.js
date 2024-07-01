function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDetectorAlarmFill = function SvgDetectorAlarmFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-120v-200h60v200h-60Zm327-115L636-376l42-43 141 142-42 42Zm-594 0-42-42 141-142 43 43-142 141Zm118-425 18 60h322l18-60H301Zm-26 120-38-120H120v-180h720v180H723l-44 120H275Z",
    fill: "currentColor"
  }));
};
export default SvgDetectorAlarmFill;