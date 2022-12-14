function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function Svg1K(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 3H3v18h18V3zM10 15H8.5v-4.5H7V9h3v6zm7 0h-1.75l-1.75-2.25V15H12V9h1.5v2.25L15.25 9H17l-2.25 3L17 15z",
    fill: "currentColor"
  }));
}
export default Svg1K;