function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStorageFill = function SvgStorageFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-160v-148h720v148H120Zm60-38h72v-72h-72v72Zm-60-454v-148h720v148H120Zm60-38h72v-72h-72v72Zm-60 284v-148h720v148H120Zm60-38h72v-72h-72v72Z",
    fill: "currentColor"
  }));
};
export default SvgStorageFill;