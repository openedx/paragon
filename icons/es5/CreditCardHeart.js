function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCreditCardHeart = function SvgCreditCardHeart(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M140-220v-320 20-220 520Zm576 100L576-260q-13-13-18.5-28t-5.5-30q0-32 23-57t59-25q28 0 44 13t38 35q20-20 36.5-34t45.5-14q37 0 59.5 25.5T880-317q0 15-6 30t-18 27L716-120ZM140-631h680v-109H140v109Zm314 471H80v-640h800v313q-35-25-76.5-39T716-540q-38 0-74 10t-67 28H140v282h299q2 15.84 6 30.92 4 15.08 9 29.08Z",
    fill: "currentColor"
  }));
};
export default SvgCreditCardHeart;