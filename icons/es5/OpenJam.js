function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOpenJam = function SvgOpenJam(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M240-120h480v-60H510v-339l78 78 46-46-154-154-154 154 46 46 78-78v339H240v60Zm240-360ZM80-328v-512h800v512H610v-60h210v-392H140v392h210v60H80Z",
    fill: "currentColor"
  }));
};
export default SvgOpenJam;