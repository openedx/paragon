function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLineStartCircleFill = function SvgLineStartCircleFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M320-240q-100 0-170-70T80-480q0-100 70-170t170-70q92 0 159.5 60.5T558-510h322v60H558q-11 89-78.5 149.5T320-240Z",
    fill: "currentColor"
  }));
};
export default SvgLineStartCircleFill;