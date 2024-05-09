function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterBottleFill = function SvgWaterBottleFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m320-80-40-440 19-10q8-5 14-12t6-17q0-9-4-17t-12-12l-23-12 40-160h150v-60h-60v-60h180v60h-60v60h150l39 158-23 12q-8 4-12 12t-4 17q0 10 6 17.5t14 12.5l19 9-39 442H320Z",
    fill: "currentColor"
  }));
};
export default SvgWaterBottleFill;