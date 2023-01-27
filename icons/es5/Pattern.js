function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgPattern(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm2 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-.02 6c-.74 0-1.37.4-1.72 1h-2.54a1.98 1.98 0 00-3.44 0H8.41l3.07-3.07c.17.04.34.07.52.07 1.1 0 2-.9 2-2 0-.18-.03-.35-.07-.51l3.56-3.56c.16.04.33.07.51.07 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .18.03.35.07.51l-3.56 3.56c-.16-.04-.33-.07-.51-.07-1.1 0-2 .9-2 2 0 .18.03.35.07.51l-3.56 3.56C6.35 16.03 6.18 16 6 16c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.37-.4 1.72-1h2.57a1.98 1.98 0 003.44 0h2.55c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2-.02-1.1-.92-2-2.02-2z",
    fill: "currentColor"
  }));
}

export default SvgPattern;