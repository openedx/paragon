function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgElectricRickshaw(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 11.18V9l-5-6H1v12h2.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37c.48 1.34 1.86 2.25 3.42 1.94 1.16-.23 2.11-1.17 2.33-2.33.31-1.56-.6-2.95-1.94-3.43zM18.4 9H16V6.12L18.4 9zM3 5h4v4H3V5zm3 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-2v-2h3V9H9V5h5v8H9zm11 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7 20h4v-2l6 3h-4v2z",
    fill: "currentColor"
  }));
}

export default SvgElectricRickshaw;