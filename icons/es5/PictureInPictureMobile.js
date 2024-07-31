function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPictureInPictureMobile = function SvgPictureInPictureMobile(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M800-80H160v-800h640v800Zm-60-60v-680H220v680h520Zm0-680H220h520Zm-45 374v-335H438v335h257Zm-60-60H498v-215h137v215Z",
    fill: "currentColor"
  }));
};
export default SvgPictureInPictureMobile;