function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgWavingHand(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5H23zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7H1zm7.9-3.57L3.42 8.91C.2 12.13.2 17.35 3.42 20.58s8.44 3.22 11.67 0l7.95-7.95-1.77-1.77-5.3 5.3-.71-.71 7.42-7.42-1.77-1.77-6.72 6.72-.71-.71 7.78-7.78-1.76-1.76-7.78 7.78-.7-.71 6.36-6.36-1.77-1.77-8.51 8.51a4.003 4.003 0 01-.33 5.28l-.71-.71a3 3 0 000-4.24l-.35-.35 4.95-4.95L8.9 3.43z",
    fill: "currentColor"
  }));
}

export default SvgWavingHand;