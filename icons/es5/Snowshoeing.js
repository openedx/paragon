function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSnowshoeing(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM6.32 19.03l-1.14-1.47L4 18.5l2.38 3.04c.51.65 1.16 1.15 1.88 1.41.28.1.53.04.72-.11.3-.23.42-.7.12-1.07a.84.84 0 00-.31-.22 2.97 2.97 0 01-1.14-.83l-.08-.1L11 18.2l.89-3.22 2.11 2v4.52h-2V23h3.87c.82 0 1.61-.21 2.26-.61.26-.16.37-.39.37-.64 0-.38-.3-.75-.77-.75-.13 0-.26.04-.37.1-.4.23-.87.37-1.36.4v-6.02l-2.11-2 .6-3C15.79 11.98 17.8 13 20 13v-2c-1.9 0-3.51-1.02-4.31-2.42l-1-1.58c-.4-.6-1-1-1.7-1-.75 0-1.41.34-5.99 2.28V13h2V9.58l1.79-.7L9.2 17l-2.88 2.03z",
    fill: "currentColor"
  }));
}

export default SvgSnowshoeing;