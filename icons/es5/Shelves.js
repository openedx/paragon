function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgShelves = function SvgShelves(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-40v-880h60v80h600v-80h60v880h-60v-80H180v80h-60Zm60-469h110v-160h220v160h270v-271H180v271Zm0 329h270v-160h220v160h110v-269H180v269Zm170-329h100v-100H350v100Zm160 329h100v-100H510v100ZM350-509h100-100Zm160 329h100-100Z",
    fill: "currentColor"
  }));
};
export default SvgShelves;