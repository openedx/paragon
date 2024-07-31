function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSwipeFill = function SvgSwipeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M880-700H700v-40h133q-75-65-164.5-102.5T480-880q-99 0-188.5 37.5T127-740h133v40H80v-180h40v93q78-62 169-97.5T480-920q100 0 191 35.5T840-787v-93h40v180ZM424-80 184-320l39-57 137 37v-370h60v320h67v-180h60v180h66v-140h60v140h67v-60h60v370H424Z",
    fill: "currentColor"
  }));
};
export default SvgSwipeFill;