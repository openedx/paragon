function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgNoPhotography(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.94 8.12L7.48 4.66 9 3h6l1.83 2H22v14.17l-5.12-5.12c.08-.34.12-.69.12-1.05 0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12zm9.55 15.19L18.17 21H2V5h.17L.69 3.51 2.1 2.1 21 21l.9.9-1.41 1.41zm-6-5.99l-1.5-1.5c-.32.1-.64.18-.99.18-1.66 0-3-1.34-3-3 0-.35.08-.67.19-.98l-1.5-1.5A4.74 4.74 0 007 13c0 2.76 2.24 5 5 5 .91 0 1.76-.25 2.49-.68z",
    fill: "currentColor"
  }));
}
export default SvgNoPhotography;