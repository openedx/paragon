function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMoneyFill = function SvgMoneyFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M572-319h191v-322H572v322Zm60-60v-202h71v202h-71Zm-308 60h186v-322H324v322Zm60-60v-202h66v202h-66Zm-187 60h60v-322h-60v322ZM80-160v-640h800v640H80Z",
    fill: "currentColor"
  }));
};
export default SvgMoneyFill;