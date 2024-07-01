function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPhishingFill = function SvgPhishingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M440-120q-100 0-170-70t-70-170v-216l176 176-42 43-74-74v71q0 75 52.5 127.5T440-180q75 0 127.5-52.5T620-360v-134q-35-11-57.5-40T540-600q0-37 22.5-66t57.5-40v-174h60v174q35 11 57.5 40t22.5 66q0 37-22.5 66.5T680-494v134q0 100-70 170t-170 70Z",
    fill: "currentColor"
  }));
};
export default SvgPhishingFill;