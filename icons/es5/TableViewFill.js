function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTableViewFill = function SvgTableViewFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-120v-560h560v560H280Zm60-394h440v-106H340v106Zm166 168h108v-108H506v108Zm0 166h108v-106H506v106ZM340-346h106v-108H340v108Zm334 0h106v-108H674v108ZM340-180h106v-106H340v106Zm334 0h106v-106H674v106ZM250-280H120v-560h560v130h-60v-70H180v440h70v60Z",
    fill: "currentColor"
  }));
};
export default SvgTableViewFill;