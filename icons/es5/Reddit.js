function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgReddit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.75 13.04c0-.57-.47-1.04-1.04-1.04-.57 0-1.04.47-1.04 1.04a1.04 1.04 0 102.08 0zm3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 00-.38 0 .26.26 0 000 .38c.71.71 2.07.77 2.47.77.4 0 1.76-.06 2.47-.77a.26.26 0 000-.38c-.1-.1-.27-.1-.38 0zm.2-3.41c-.57 0-1.04.47-1.04 1.04 0 .57.47 1.04 1.04 1.04s1.04-.47 1.04-1.04c0-.57-.46-1.04-1.04-1.04z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.8 11.33c.02.14.03.29.03.44 0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 012.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 11.93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 111.6 2.38z",
    fill: "currentColor"
  }));
}

export default SvgReddit;