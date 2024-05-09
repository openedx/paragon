function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStepOut = function SvgStepOut(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M479.88-80Q434-80 402-112.12q-32-32.12-32-78T402.12-268q32.12-32 78-32T558-267.88q32 32.12 32 78T557.88-112q-32.12 32-78 32ZM450-410v-354L336-651l-42-42 186-186 186 186-43 42-113-113v354h-60Z",
    fill: "currentColor"
  }));
};
export default SvgStepOut;