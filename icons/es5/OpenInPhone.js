function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOpenInPhone = function SvgOpenInPhone(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-40v-320h60v170h440v-580H260v170h-60v-320h560v880H200Zm60-90v30h440v-30H260Zm143-198-43-43 79-79H80v-60h359l-79-79 43-43 152 152-152 152ZM260-830h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z",
    fill: "currentColor"
  }));
};
export default SvgOpenInPhone;