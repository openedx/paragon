function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWbAutoFill = function SvgWbAutoFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M183-350h44l29-81h129l29 81h44L341-655h-41L183-350Zm85-116 51-142h3l51 142H268Zm55 266q-117 0-198.5-81.5T43-480q0-117 81.5-198.5T323-760q86 0 156.5 47T581-586l-16-69h43l54 232h2l64-232h30l64 232 54-232h41l-72 305h-43l-59-214h-4l-59 214h-43l-33-139q2 119-80.5 204T323-200Z",
    fill: "currentColor"
  }));
};
export default SvgWbAutoFill;