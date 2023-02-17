function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgPlagiarism(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 11.5,
    cy: 14.5,
    r: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2H4v20h16V8l-6-6zm1.04 17.45l-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 010-4.95 3.495 3.495 0 014.95 0 3.48 3.48 0 01.59 4.13l1.88 1.88-1.41 1.41zM13 9V3.5L18.5 9H13z",
    fill: "currentColor"
  }));
}

export default SvgPlagiarism;