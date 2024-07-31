function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVolumeDownAlt = function SvgVolumeDownAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-360v-240h160l200-200v640L360-360H200Zm420 48v-337q54 17 87 64t33 105q0 59-33 105t-87 63ZM500-648 387-540H260v120h127l113 109v-337ZM378-480Z",
    fill: "currentColor"
  }));
};
export default SvgVolumeDownAlt;