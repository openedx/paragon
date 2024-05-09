function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgShadowAddFill = function SvgShadowAddFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M530-410v-120H410v-60h120v-120h60v120h120v60H590v120h-60ZM80-80v-628h172v-172h628v628H708v172H80Zm232-232h508v-508H312v508Z",
    fill: "currentColor"
  }));
};
export default SvgShadowAddFill;