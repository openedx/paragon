function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBrandAwareness = function SvgBrandAwareness(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M655-452v-60h145v60H655Zm33 292-119-88 34-47 119 88-34 47Zm-85-505-34-47 119-88 34 47-119 88ZM120-361v-240h160l200-200v640L280-361H120Zm300-288L307-541H180v120h127l113 109v-337Zm-94 168Z",
    fill: "currentColor"
  }));
};
export default SvgBrandAwareness;