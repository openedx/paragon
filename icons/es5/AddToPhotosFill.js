function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAddToPhotosFill = function SvgAddToPhotosFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M510-378h60v-132h132v-60H570v-132h-60v132H378v60h132v132ZM200-200v-680h680v680H200ZM80-80v-680h60v620h620v60H80Z",
    fill: "currentColor"
  }));
};
export default SvgAddToPhotosFill;