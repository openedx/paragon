function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSettopComponent = function SvgSettopComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-280v-400h800v400H80Zm60-60h680v-280H140v280Zm80-110h220v-60H220v60Zm340 0h60v-60h-60v60Zm120 0h60v-60h-60v60ZM140-340v-280 280Z",
    fill: "currentColor"
  }));
};
export default SvgSettopComponent;