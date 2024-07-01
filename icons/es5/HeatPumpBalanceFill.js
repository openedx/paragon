function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHeatPumpBalanceFill = function SvgHeatPumpBalanceFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-696v470h225v-410h105v410h225v-450h131l-58 56 42 43 130-129-130-130-42 43 57 57H655v450H550v-410H325v410H220v-410h-60ZM40-96v-395h880v395H40Z",
    fill: "currentColor"
  }));
};
export default SvgHeatPumpBalanceFill;