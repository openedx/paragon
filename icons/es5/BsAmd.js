function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgBsAmd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    className: "bs-amd_svg__bi bs-amd_svg__bi-amd",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M.334 0l4.358 4.359h7.15v7.15l4.358 4.358V0H.334zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72z",
    fill: "currentColor"
  }));
}
export default SvgBsAmd;