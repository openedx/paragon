function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPillFill = function SvgPillFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m661-342 113-114q32-32 49-73t17-86q0-94-65.5-159.5T615-840q-45 0-86 17t-73 49L342-661l319 319ZM345-120q45 0 86-17t73-49l114-113-319-319-113 114q-32 32-49 73t-17 86q0 94 65.5 159.5T345-120Z",
    fill: "currentColor"
  }));
};
export default SvgPillFill;