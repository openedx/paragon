function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgKeyVisualizer = function SvgKeyVisualizer(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-60h120v60H120Zm0-165v-60h322v60H120Zm0-165v-60h720v60H120Zm0-165v-60h322v60H120Zm0-165v-60h120v60H120Zm202 660v-60h120v60H322Zm-2-660v-60h120v60H320Zm203 660v-60h115v60H523Zm-3-165v-60h320v60H520Zm0-330v-60h320v60H520Zm0-165v-60h120v60H520Zm200 660v-60h120v60H720Zm0-660v-60h120v60H720Z",
    fill: "currentColor"
  }));
};
export default SvgKeyVisualizer;