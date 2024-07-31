function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSmartCardReader = function SvgSmartCardReader(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-180h800v180H80Zm60-60h680v-60H140v60Zm63-200v-540h554v540h-60v-480H263v480h-60Zm120-69h23q41 0 65-42.08 24-42.07 24-110.92 0-70-24-112t-65-42h-23v307Zm242.8-82q29.2 0 50.2-20.8 21-20.79 21-50 0-29.2-20.8-50.2-20.79-21-50-21-29.2 0-50.2 20.8-21 20.79-21 50 0 29.2 20.8 50.2 20.79 21 50 21ZM480-140Zm0-440Z",
    fill: "currentColor"
  }));
};
export default SvgSmartCardReader;