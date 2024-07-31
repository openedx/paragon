function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAirlineStopsFill = function SvgAirlineStopsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M370-200v-60h80q-8-154-113-262T80-630v-60q135 0 243.5 78T480-407q35-96 102.5-170T740-700H580v-60h260v260h-60v-153q-114 59-188 162t-82 231h80v60H370Z",
    fill: "currentColor"
  }));
};
export default SvgAirlineStopsFill;