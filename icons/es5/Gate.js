function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGate = function SvgGate(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-280v-400h60v400H80Zm120 80v-410q0-63 44-106.5T350-760h260q63 0 106.5 43.5T760-610v410H200Zm620-80v-400h60v400h-60ZM480-480ZM260-260h190v-190h-80v-60h80v-190H350q-37 0-63.5 26T260-610v350Zm250 0h190v-350q0-38-26-64t-64-26H510v190h80v60h-80v190Z",
    fill: "currentColor"
  }));
};
export default SvgGate;