function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHandheldController = function SvgHandheldController(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M439-243q-66 0-111-48.5T274-408q-100-1-167-74T40-656q0-24.75 17.63-42.38Q75.25-716 100-716h186v-64h-82v-60h224v60h-82v64h145q12.44 0 23.72 5T534-698l346 348q40 40 40.5 96T880-159q-39 39-94.5 39T691-159l-82.59-84H439Zm5-165h-97q-4 42 23 73.5t69 31.5h109L444-408Zm48-248H100q0 77 50 132.5T275-468h194l265 267q22 22 52 22t52-22.5q22-22.5 22-53.17 0-30.68-22-52.33L492-656Zm0 0Z",
    fill: "currentColor"
  }));
};
export default SvgHandheldController;