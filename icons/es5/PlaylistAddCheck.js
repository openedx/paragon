function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgPlaylistAddCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07l-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z",
    fill: "currentColor"
  }));
}
export default SvgPlaylistAddCheck;