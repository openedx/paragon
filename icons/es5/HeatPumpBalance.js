function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHeatPumpBalance = function SvgHeatPumpBalance(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-696h60v410h105v-410h225v410h105v-450h190l-57-57 42-43 130 130-130 129-42-43 58-56H715v450H490v-410H385v410H160v-470ZM40-96v-395h880v395H40Zm60-60h760v-275H100v275Zm760-275H100h760Z",
    fill: "currentColor"
  }));
};
export default SvgHeatPumpBalance;