function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCheckedBag = function SvgCheckedBag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-60h800v60H80Zm78-120v-480h199q0-54 36-87t86-33q50 0 86 33t36 87.49h199V-240H158Zm526-60h56v-360h-56v360ZM401-720h156q0-34-23.5-54.5T479-795q-31 0-54.5 20.5T401-720ZM274-300v-360h-56v360h56Zm45-360v360h320v-360H319Zm-45 360h45-45Zm410 0h-45 45Zm-410 0h-56 56Zm45 0h320-320Zm365 0h56-56Z",
    fill: "currentColor"
  }));
};
export default SvgCheckedBag;