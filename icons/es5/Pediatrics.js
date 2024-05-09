function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPediatrics = function SvgPediatrics(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M290-700v-60h160v-120h60v120h160v60H290ZM280-80v-450q0-50 35-85t85-35h160q50 0 85 35t35 85v450H280Zm60-60h280v-390q0-25.5-17.25-42.75T560-590H400q-25.5 0-42.75 17.25T340-530v50h130v60H340v110h130v60H340v110Zm0 0v-450 450Z",
    fill: "currentColor"
  }));
};
export default SvgPediatrics;