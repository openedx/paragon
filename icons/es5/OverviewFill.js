function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOverviewFill = function SvgOverviewFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m800-134 28-28-75-75v-112h-40v128l87 87Zm-67 93q-78 0-133-55.5T545-228q0-78 55-133.5T733-417q77 0 132.5 55.5T921-228q0 76-55.5 131.5T733-41ZM280-620h400v-60H280v60Zm230 500H120v-720h720v389q-25-13-52-19t-55-6q-14 0-27 1.5t-26 4.5v-40H280v60h344q-36 18-64.5 46.5T513-340H280v60h211q-3 13-4.5 26t-1.5 27q0 29 6 55t19 52Z",
    fill: "currentColor"
  }));
};
export default SvgOverviewFill;