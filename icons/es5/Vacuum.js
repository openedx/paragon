function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVacuum = function SvgVacuum(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M154-80q-47.5 0-80.75-33.25T40-194q0-47.5 33.25-80.75T154-308q47.5 0 80.75 33.25T268-194q0 47.5-33.25 80.75T154-80Zm0-60q24 0 39-15t15-39q0-24-15-39t-39-15q-24 0-39 15t-15 39q0 24 15 39t39 15Zm134 60q11-13 19.5-29.5T320-140h114v-300q0-37.54-26.73-64.27Q380.54-531 343-531H142v163q-14 0-30.5 4T82-353v-238h125v-153q0-72 52-124t124-52q56 0 100 29t65 80l278 671h94v60H654v-60h110L489-786q-15-35-41.5-54.5T383-860q-48 0-82 34t-34 82v153h76.16Q406-591 450-547t44 107v360H288Zm0-256Z",
    fill: "currentColor"
  }));
};
export default SvgVacuum;