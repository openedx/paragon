function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBoxEditFill = function SvgBoxEditFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-609l82-111h555l83 111v123L640-407v-267H320v342l160-80 109 55-89 89v148H120Zm440 0v-123l263-262 122 122-262 263H560Zm263-224 37-39-37-37-38 38 38 38ZM197-734h565l-36-46H233l-36 46Z",
    fill: "currentColor"
  }));
};
export default SvgBoxEditFill;