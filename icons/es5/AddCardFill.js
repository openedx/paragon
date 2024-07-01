function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAddCardFill = function SvgAddCardFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M140-501h680v-139H140v139ZM780-80v-120H660v-60h120v-120h60v120h120v60H840v120h-60ZM80-160v-640h800v360H780q-74.7 0-127.35 52.65Q600-334.7 600-260v100H80Z",
    fill: "currentColor"
  }));
};
export default SvgAddCardFill;