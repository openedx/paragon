function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCastleFill = function SvgCastleFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-120v-470h60v80h110v-330h60v80h100v-80h60v80h100v-80h60v80h100v-80h60v330h110v-80h60v470H570v-210H390v210H40Zm330-370h60v-110h-60v110Zm160 0h60v-110h-60v110Z",
    fill: "currentColor"
  }));
};
export default SvgCastleFill;