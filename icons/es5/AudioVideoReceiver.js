function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAudioVideoReceiver = function SvgAudioVideoReceiver(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M140-340h680v-360H140v360Zm-60 60v-480h800v480h-80v80h-60v-80H220v80h-60v-80H80Zm60-60v-360 360Zm540-100q33 0 56.5-23.5T760-520q0-33-23.5-56.5T680-600q-33 0-56.5 23.5T600-520q0 33 23.5 56.5T680-440Zm-440 0h300v-160H240v160Z",
    fill: "currentColor"
  }));
};
export default SvgAudioVideoReceiver;