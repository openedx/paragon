function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStackedLineChartFill = function SvgStackedLineChartFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m140-85-46-46 300-300 160 161 298-335 42 41-340 384-160-159L140-85Zm0-269-46-46 300-300 160 161 298-335 42 41-340 384-160-159-254 254Z",
    fill: "currentColor"
  }));
};
export default SvgStackedLineChartFill;