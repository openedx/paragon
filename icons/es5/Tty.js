function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgTty(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 15v6c-3.28 0-6.35-.89-9-2.43A17.999 17.999 0 014.43 12 17.851 17.851 0 012 3h6l1 5-2.9 2.9c1.43 2.5 3.5 4.57 6 6L15 14l5 1zm-6-9h2V4h-2v2zm-1 3h2V7h-2v2zm-2-3h2V4h-2v2zm7 1h-2v2h2V7zm1-3h-2v2h2V4zm2 3h-2v2h2V7zm1-3h-2v2h2V4zm-8 8h2v-2h-2v2zm-3 0h2v-2h-2v2zm8-2h-2v2h2v-2zm3 0h-2v2h2v-2z",
    fill: "currentColor"
  }));
}

export default SvgTty;