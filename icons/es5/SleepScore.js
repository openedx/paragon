function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSleepScore = function SvgSleepScore(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M616-887q112 0 191 79t79 191h-60q0-42-15.57-79.02Q794.85-733.03 768-762l-40 66q-9.39 16-20.2 35-10.8 19-23.8 32-12 12-28.62 12-16.63 0-28.5-12-11.88-12-11.38-28t12.5-28q13-13 31.5-24.5T694-730l67-39q-28.97-26.85-65.98-42.43Q658-827 616-827v-60ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-146 93-257.5T409-880q-18 98 11 192.63 29 94.64 100 165.74 71 71.1 165.5 100.14Q780-392.45 879-410.47q-26 144.2-138 237.34Q629-80 483-80Zm0-60q100 0 182-57t132-145q-90-8-173-41.5T477.5-480Q414-543 381-625.5T340-797q-88 48-144.5 130.5T139-484q0 143.33 100.33 243.67Q339.67-140 483-140Zm-6-340Z",
    fill: "currentColor"
  }));
};
export default SvgSleepScore;