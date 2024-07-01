function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStackStar = function SvgStackStar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m516-243 84-50 84 50-22-95 73-64-97-8-38-90-38 90-97 8 73 64-22 95ZM260-380v60H80v-560h560v180h-60v-120H140v440h120Zm60 300v-560h560v560H320Zm60-60h440v-440H380v440Zm220-220Z",
    fill: "currentColor"
  }));
};
export default SvgStackStar;