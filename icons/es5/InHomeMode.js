function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgInHomeMode = function SvgInHomeMode(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-513ZM160-160v-400l-84 64-36-48 440-337 440 337-36 48-404-309-260 199v386h192v60H160Zm451 80L456-235l42-43 113 114 227-226 42 42L611-80Z",
    fill: "currentColor"
  }));
};
export default SvgInHomeMode;