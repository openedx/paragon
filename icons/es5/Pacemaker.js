function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPacemaker = function SvgPacemaker(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M249.9-80Q196-80 158-118.07q-38-38.07-38-91.93v-341q-24-23-52-49.5T40-664q0-22.91 16.55-39.45Q73.09-720 96-720q17 0 30 9t24 21q11-12 24.5-21t29.5-9q22.91 0 39.45 16.55Q260-686.91 260-664q0 37-28 63.5T180-551v341q0 29.17 20.38 49.58Q220.76-140 249.88-140t49.62-20.42Q320-180.83 320-210v-475q0-80.92 57.05-137.96 57.06-57.04 138-57.04Q596-880 653-822.96q57 57.04 57 137.96v7q72 11 121 67 49 55.99 49 131v200q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280v-200q0-75.01 49-131 49-56 121-67v-7q0-57-39-96t-96-39q-57 0-96 39t-39 96v475q0 53.86-38.1 91.93Q303.8-80 249.9-80Zm429.86-60Q738-140 779-180.83q41-40.84 41-99.17v-200q0-58.33-40.76-99.17-40.77-40.83-99-40.83Q622-620 581-579.17q-41 40.84-41 99.17v200q0 58.33 40.76 99.17 40.77 40.83 99 40.83Zm.24-220q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360Zm0 80Z",
    fill: "currentColor"
  }));
};
export default SvgPacemaker;