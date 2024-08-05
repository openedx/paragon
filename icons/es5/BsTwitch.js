function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBsTwitch = function SvgBsTwitch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    className: "bi bi-twitch",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z",
    fill: "currentColor"
  }));
};
export default SvgBsTwitch;