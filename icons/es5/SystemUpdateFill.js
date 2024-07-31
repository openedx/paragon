function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSystemUpdateFill = function SvgSystemUpdateFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-40v-880h560v880H200Zm60-150h440v-580H260v580Zm220-128L325-473l43-43 82 82v-194h60v194l82-82 43 43-155 155Z",
    fill: "currentColor"
  }));
};
export default SvgSystemUpdateFill;