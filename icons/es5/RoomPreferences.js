function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgRoomPreferences(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 11.26V6h3v4h2V4h-5V3H5v16H3v2h9.26A6.963 6.963 0 0111 17c0-2.38 1.19-4.47 3-5.74zM10 11h2v2h-2v-2zm11.69 5.37l1.14-1-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L19 12h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1c-.08.5-.08.76 0 1.26l-1.14 1 1 1.73 1.45-.49c.32.27.68.48 1.08.63L17 22h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1c.08-.51.08-.77 0-1.27zM18 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
    fill: "currentColor"
  }));
}

export default SvgRoomPreferences;