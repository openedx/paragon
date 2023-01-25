function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgWechat(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43 0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47-.09-.39-.14-.79-.14-1.21-.01-3.54 3.44-6.43 7.69-6.43zM12 5.89a.96.96 0 110 1.92.96.96 0 010-1.92zM6.87 7.82a.96.96 0 110-1.92.96.96 0 010 1.92z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14 2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03zm-8.34-.32a.96.96 0 11.96-.96c.01.53-.43.96-.96.96zm3.85 0a.96.96 0 110-1.92.96.96 0 010 1.92z",
    fill: "currentColor"
  }));
}

export default SvgWechat;