function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLabProfile = function SvgLabProfile(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M320-490v-60h320v60H320Zm0-160v-60h320v60H320ZM220-390h374l146 190v-620H220v430Zm0 250h490L565-330H220v190Zm580 60H160v-800h640v800Zm-580-60v-680 680Zm0-190v-60 60Z",
    fill: "currentColor"
  }));
};
export default SvgLabProfile;