function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgThermometerMinusFill = function SvgThermometerMinusFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M560-650v-60h320v60H560ZM320-120q-75.53 0-128.76-53.24Q138-226.47 138-302q0-49.1 24-91.55Q186-436 228-462v-286q0-38.33 26.76-65.17 26.77-26.83 65-26.83Q358-840 385-813.17q27 26.84 27 65.17v286q42 26 66 68.45T502-302q0 75.53-53.23 128.76Q395.53-120 320-120ZM198-302h244q0-38-18-70.5T372-420l-20-9v-319q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v319l-20 9q-34 15-52 47.59-18 32.6-18 70.41Z",
    fill: "currentColor"
  }));
};
export default SvgThermometerMinusFill;