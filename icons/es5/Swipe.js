function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSwipe(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2l-1.87 1.87z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 12.5v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-4.04-.85-1.21 1.23L10.13 23h8.97l1.09-7.64-6.11-2.86H13z",
    fill: "currentColor"
  }));
}

export default SvgSwipe;