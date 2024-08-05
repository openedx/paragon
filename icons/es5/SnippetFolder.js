function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgSnippetFolder = function SvgSnippetFolder(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m12 6-2-2H2v16h20V6H12zm7 11h-6V9h3.5l2.5 2.5V17zm-3.12-6.5 1.62 1.62v3.38h-3v-5h1.38z",
    fill: "currentColor"
  }));
};
export default SvgSnippetFolder;