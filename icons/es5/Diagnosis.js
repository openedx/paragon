function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDiagnosis = function SvgDiagnosis(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M320-210h320v-60H320v60Zm0-120h320v-60H320v60Zm160-154q64-58 107-98t43-90q0-31.91-23.05-54.95Q583.91-750 552-750q-25 0-41 9.5T480-712q-15-19-31-28.5t-41-9.5q-31.91 0-54.95 23.05Q330-703.91 330-672q0 50 41.5 88.5T480-484ZM160-80v-800h640v800H160Zm60-60h520v-680H220v680Zm0 0v-680 680Z",
    fill: "currentColor"
  }));
};
export default SvgDiagnosis;