function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRangeHood = function SvgRangeHood(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-280l200-200v-200h400v200l200 200v280H80Zm112-308h576L620-616v-164H340v164L192-468Zm-52 248h680v-188H140v188Zm260-74v-40h160v40H400Z",
    fill: "currentColor"
  }));
};
export default SvgRangeHood;