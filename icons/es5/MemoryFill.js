function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMemoryFill = function SvgMemoryFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M377-377v-205h205v205H377Zm-17 257v-80H200v-160h-80v-60h80v-124h-80v-60h80v-160h160v-76h60v76h124v-76h60v76h160v160h76v60h-76v124h76v60h-76v160H604v80h-60v-80H420v80h-60Zm344-140v-444H260v444h444Z",
    fill: "currentColor"
  }));
};
export default SvgMemoryFill;