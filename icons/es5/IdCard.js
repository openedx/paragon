function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgIdCard = function SvgIdCard(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M580-450h180v-60H580v60Zm0-120h180v-60H580v60ZM200-320h320v-19q0-42-42.5-68.5T360-434q-75 0-117.5 26.5T200-339v19Zm159.92-174q30.08 0 51.58-21.42t21.5-51.5q0-30.08-21.42-51.58t-51.5-21.5q-30.08 0-51.58 21.42t-21.5 51.5q0 30.08 21.42 51.58t51.5 21.5ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgIdCard;