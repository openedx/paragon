function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPaymentsFill = function SvgPaymentsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-160v-520h60v460h700v60H40Zm120-120v-520h760v520H160Zm160-60q0-42-29-71t-71-29v100h100Zm440 0h100v-100q-42 0-71 29t-29 71Zm-220-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM220-640q42 0 71-29t29-71H220v100Zm640 0v-100H760q0 42 29 71t71 29Z",
    fill: "currentColor"
  }));
};
export default SvgPaymentsFill;