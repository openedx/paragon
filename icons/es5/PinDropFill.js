function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPinDropFill = function SvgPinDropFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-222Q343-325 276.5-419.2 210-513.4 210-603.75q0-68.25 24.5-119.75T298-810q39-35 86.98-52.5 47.98-17.5 95-17.5T575-862.5q48 17.5 87 52.5t63.5 86.53Q750-671.93 750-603.54 750-513 683.5-419 617-325 480-222Zm.09-318q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM210-80v-60h540v60H210Z",
    fill: "currentColor"
  }));
};
export default SvgPinDropFill;