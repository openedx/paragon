function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBox = function SvgBox(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-674v494h600v-494H640v342l-160-80-160 80v-342H180Zm-60 554v-609l82-111h555l83 111v609H120Zm77-614h565l-36-46H233l-36 46Zm183 60v245l100-50 100 50v-245H380Zm-200 0h600-600Z",
    fill: "currentColor"
  }));
};
export default SvgBox;