function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgClosedCaptionDisabled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.83 4H21v14.17L17.83 15H18v-2h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18V9h-5v1.17L6.83 4zm12.95 18.61L17.17 20H3V5.83L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM11 13.83l-.83-.83H9.5v.5h-2v-3h.17L6.17 9H6v6h5v-1.17z",
    fill: "currentColor"
  }));
}
export default SvgClosedCaptionDisabled;