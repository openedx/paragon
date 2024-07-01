function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAltitudeFill = function SvgAltitudeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M730-490v-181l-74 73-42-42 146-146 146 146-42 43-74-74v181h-60ZM40-80l240-320 195 260 46-37-124-166 163-217L920-80H40Z",
    fill: "currentColor"
  }));
};
export default SvgAltitudeFill;