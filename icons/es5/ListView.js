function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgListView = function SvgListView(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 13h2v-2H3v2Zm0 4h2v-2H3v2Zm0-8h2V7H3v2Zm4 4h14v-2H7v2Zm0 4h14v-2H7v2ZM7 7v2h14V7H7Zm-4 6h2v-2H3v2Zm0 4h2v-2H3v2Zm0-8h2V7H3v2Zm4 4h14v-2H7v2Zm0 4h14v-2H7v2ZM7 7v2h14V7H7Z",
    fill: "currentColor"
  }));
};
export default SvgListView;