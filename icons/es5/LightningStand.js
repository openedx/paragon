function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLightningStand = function SvgLightningStand(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-122 0-201-31t-79-107q0-76 79-107t201-31q122 0 201 31t79 107q0 76-79 107T480-80Zm0-86q-122 0-178-21t-64-72q-5 8-6.5 20t-1.5 21q0 52 64.5 80T480-110q121 0 185.5-28t64.5-80q0-9-1.5-21t-6.5-20q-9 51-64.5 72T480-166Zm0-30q106 0 157-16.5t51-49.5q0-33-51-48.5T480-326q-106 0-157.5 15.5T271-262q0 33 51.5 49.5T480-196Zm-37-215v-197h-77l151-274v197h77L443-411Zm37 215Zm0 86Zm0-56Z",
    fill: "currentColor"
  }));
};
export default SvgLightningStand;