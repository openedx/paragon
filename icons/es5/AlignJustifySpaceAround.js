function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAlignJustifySpaceAround = function SvgAlignJustifySpaceAround(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M820-80v-800h60v800h-60ZM80-80v-800h60v800H80Zm530-210v-380h100v380H610Zm-360 0v-380h100v380H250Z",
    fill: "currentColor"
  }));
};
export default SvgAlignJustifySpaceAround;