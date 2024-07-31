function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPriceChangeFill = function SvgPriceChangeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-640h800v640H80Zm244-114h60v-45h48q16 0 25.5-12t9.5-27v-115q0-16-9.5-27.5T432-512H297v-69h170v-60h-83v-45h-60v45h-48q-16 0-27.5 12T237-601v114q0 16 11.5 25.5T276-452h131v73H237v60h87v45Zm326-35 60-60H590l60 60Zm-60-272h120l-60-60-60 60Z",
    fill: "currentColor"
  }));
};
export default SvgPriceChangeFill;