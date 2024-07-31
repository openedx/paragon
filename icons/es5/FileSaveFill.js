function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFileSaveFill = function SvgFileSaveFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M580 0v-60h300V0H580Zm150-124L584-270l42-42 74 74v-181h60v181l74-74 42 42-146 146Zm-570-36v-720h366l234 234v167H520v319H160Zm340-460h200L500-820v200Z",
    fill: "currentColor"
  }));
};
export default SvgFileSaveFill;