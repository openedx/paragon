function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgIssue(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.32 7.759c-.98.98-1.24 2.4-.81 3.62l-3.41 3.41c-.2.2-.2.51 0 .71l1.4 1.4c.2.2.51.2.71 0l3.41-3.41c1.22.43 2.64.17 3.62-.81 1.11-1.11 1.3-2.78.59-4.1l-2.35 2.35-1.41-1.41 2.35-2.35a3.468 3.468 0 00-4.1.59z",
    fill: "currentColor"
  }));
}
export default SvgIssue;