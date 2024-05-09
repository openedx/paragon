function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAppPromoFill = function SvgAppPromoFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M636-518 480-362 324-518l42-42 84 84v-204h60v204l84-84 42 42ZM398-125h164v-40H398v40ZM200-40v-880h560v880H200Zm60-210h440v-520H260v520Z",
    fill: "currentColor"
  }));
};
export default SvgAppPromoFill;