function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBia = function SvgBia(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M140-220h110v-130h60v130h100v-130h60v130h100v-130h60v130h190v-310q-35 25-82 37.5T640-480q-56 0-107-15t-86-45H140v320Zm120-380h146q-3-9-4.5-19t-1.5-21q0-17 4-31.5t11-28.5H260v100Zm380 60q66 0 123-21.5t57-78.5q0-57-57-78.5T640-740q-66 0-123 21.5T460-640q0 57 57 78.5T640-540ZM80-160v-440h120v-160h275q34-20 77-30t88-10q91 0 165.5 39.5T880-640v480H80Zm60-60h680-680Z",
    fill: "currentColor"
  }));
};
export default SvgBia;