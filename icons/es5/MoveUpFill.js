function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMoveUpFill = function SvgMoveUpFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M320-160q-117 0-198.5-81.5T40-440q0-118 83.5-197.5T323-711l-86-86 43-43 160 160-160 160-43-43 89-89q-92-2-159 59.5T100-440q0 92 64 156t156 64h120v60H320Zm200-360v-280h360v280H520Zm0 360v-280h360v280H520Zm60-60h240v-160H580v160Z",
    fill: "currentColor"
  }));
};
export default SvgMoveUpFill;