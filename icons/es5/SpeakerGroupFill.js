function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSpeakerGroupFill = function SvgSpeakerGroupFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-160v-760h560v760H280Zm280-473q33.75 0 57.38-23Q641-679 641-714q0-32.92-23.62-55.96Q593.75-793 560-793q-32.92 0-55.96 23.04T481-714q0 35 23.04 58T560-633Zm1 346q57.17 0 97.59-40.5Q699-368 699-427t-40.41-99.5Q618.17-567 561-567q-58.83 0-100.41 40.5Q419-486 419-427t41.59 99.5Q502.17-287 561-287Zm-2.47-60Q525-347 502-370.26q-23-23.27-23-56.5 0-33.24 23-56.74t56.53-23.5q33.53 0 57 23.26Q639-460.47 639-427.24q0 33.24-23.47 56.74t-57 23.5ZM519-40H160v-760h60v700h299v60Z",
    fill: "currentColor"
  }));
};
export default SvgSpeakerGroupFill;