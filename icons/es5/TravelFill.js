function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTravelFill = function SvgTravelFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m272-271-118-66 30-30 99 14 177-177-320-175 41-41 393 102 118-119q15-15 35.5-15t35.5 15q15 15 15 35.5T763-692L645-573l102 393-41 41-175-320-177 177 14 99-30 30-66-118Z",
    fill: "currentColor"
  }));
};
export default SvgTravelFill;