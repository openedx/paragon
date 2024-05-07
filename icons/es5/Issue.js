function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgIssue = function SvgIssue(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 10.7c-1 1-2.4 1.2-3.6.8l-3.4 3.4c-.2.2-.5.2-.7 0l-1.4-1.4c-.2-.2-.2-.5 0-.7l3.4-3.4c-.4-1.2-.2-2.6.8-3.6 1.1-1.1 2.8-1.3 4.1-.6l-2.3 2.4 1.4 1.4 2.4-2.3c.6 1.2.4 2.9-.7 4z",
    fill: "currentColor"
  }));
};
export default SvgIssue;