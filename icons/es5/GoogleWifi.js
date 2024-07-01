function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGoogleWifi = function SvgGoogleWifi(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M164-540h632l-12-200H176l-12 200Zm-4 60-15 230h670l-15-230H160Zm38 320-11-30H81l39-610h720l39 610H773l-11 30H198Z",
    fill: "currentColor"
  }));
};
export default SvgGoogleWifi;