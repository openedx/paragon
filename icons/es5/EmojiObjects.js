function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgEmojiObjects(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 3c-.42 0-.85.04-1.28.11-2.81.5-5.08 2.75-5.6 5.55-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V21h2.28a1.98 1.98 0 003.44 0H16v-4.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0019 10c0-3.87-3.13-7-7-7zm2 16h-4v-1h4v1zm0-2h-4v-1h4v1zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.82z",
    fill: "currentColor"
  }));
}

export default SvgEmojiObjects;