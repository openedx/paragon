function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStepOver = function SvgStepOver(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M479.88-200Q434-200 402-232.12q-32-32.12-32-78T402.12-388q32.12-32 78-32T558-387.88q32 32.12 32 78T557.88-232q-32.12 32-78 32ZM165-490q18-117 107-193.5T479-760q81 0 149 37t112 99v-136h60v270H530v-60h186q-32-67-95.17-108.5T480-700q-93.55 0-164.77 59.5Q244-581 226-490h-61Z",
    fill: "currentColor"
  }));
};
export default SvgStepOver;