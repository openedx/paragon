function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgUndoFill = function SvgUndoFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M259-200v-60h310q70 0 120.5-46.5T740-422q0-69-50.5-115.5T569-584H274l114 114-42 42-186-186 186-186 42 42-114 114h294q95 0 163.5 64T800-422q0 94-68.5 158T568-200H259Z",
    fill: "currentColor"
  }));
};
export default SvgUndoFill;