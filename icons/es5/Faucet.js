function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFaucet = function SvgFaucet(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-370v-60h200v-70H160v-60h180v130h110v-296q0-64 45.5-109T605-880q44 0 80 22.5t56 61.5l42 84-55 27-41-83q-12-23-34.5-37.5T604-820q-39 0-66.5 27.5T510-726v296h110v-130h180v60H680v70h200v60H80Zm80 250v-250h60v190h520v-190h60v250H160Z",
    fill: "currentColor"
  }));
};
export default SvgFaucet;