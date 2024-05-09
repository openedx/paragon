function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFileUploadOff = function SvgFileUploadOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m480-800 193 193-43 43-120-120v148l-60-60v-88l-44 44-43-43 117-117Zm-30 487v-197l60 60v137h-60ZM813-61l-99-99H160v-203h60v143h434L61-813l43-43 752 752-43 43Zm-13-181-60-60v-61h60v121Z",
    fill: "currentColor"
  }));
};
export default SvgFileUploadOff;