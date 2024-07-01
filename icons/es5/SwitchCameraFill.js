function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSwitchCameraFill = function SvgSwitchCameraFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-633h207l73-87h240l73 87h207v633H80Zm290-160 45-47-83-84h295l-84 84 47 47 156-156-156-157-45 45 81 79H332l81-79-43-46-156 158 156 156Z",
    fill: "currentColor"
  }));
};
export default SvgSwitchCameraFill;