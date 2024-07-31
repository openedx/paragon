function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNewsmode = function SvgNewsmode(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-720h800v720H80Zm60-60h680v-600H140v600Zm109-106h462v-60H249v60Zm0-166h155v-222H249v222Zm259 0h203v-60H508v60Zm0-162h203v-60H508v60ZM140-180v-600 600Z",
    fill: "currentColor"
  }));
};
export default SvgNewsmode;