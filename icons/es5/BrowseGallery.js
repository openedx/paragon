function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgBrowseGallery(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 3a9 9 0 10.001 18.001A9 9 0 009 3zm2.79 13.21L8 12.41V7h2v4.59l3.21 3.21-1.42 1.41z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.99 3.52v2.16A6.99 6.99 0 0122 12c0 2.79-1.64 5.2-4.01 6.32v2.16C21.48 19.24 24 15.91 24 12s-2.52-7.24-6.01-8.48z",
    fill: "currentColor"
  }));
}
export default SvgBrowseGallery;