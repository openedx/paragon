function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMarkdown = function SvgMarkdown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m640-360 120-120-42-43-48 48v-125h-60v125l-48-48-42 43 120 120ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Zm79-140h50v-190h53v127h50v-127h60v190h50v-240H219v240Z",
    fill: "currentColor"
  }));
};
export default SvgMarkdown;