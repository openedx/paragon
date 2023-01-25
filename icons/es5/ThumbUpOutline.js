function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgThumbUpOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1 21h4V9H1v12zM23 12.4V8h-8.31l1.12-5.38L14.17 1 7 8.18V21h12.31L23 12.4zM9 19V9.01l4.34-4.35-.61 2.93-.5 2.41H21v1.99L17.99 19H9z",
    fill: "currentColor"
  }));
}

export default SvgThumbUpOutline;