function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgDeblur(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v18a9 9 0 000-18z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 14,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 18,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 10,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 3,
    cy: 10,
    r: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 6,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 3,
    cy: 14,
    r: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 21,
    r: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 3,
    r: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 6,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 14,
    r: 1.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 10,
    r: 1.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 18,
    r: 1
  }));
}
export default SvgDeblur;