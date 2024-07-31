function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAddRoadFill = function SvgAddRoadFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M740-40v-120H620v-60h120v-120h60v120h120v60H800v120h-60Zm0-399v-361h60v361h-60ZM160-160v-640h60v640h-60Zm290-493v-147h60v147h-60Zm0 246v-147h60v147h-60Zm0 247v-148h60v148h-60Z",
    fill: "currentColor"
  }));
};
export default SvgAddRoadFill;