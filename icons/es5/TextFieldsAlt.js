function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTextFieldsAlt = function SvgTextFieldsAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-60h800v60H80Zm700-160v-560h40v560h-40Zm-620 0 220-560h80l220 560h-75l-57-151H292l-57 151h-75Zm156-214h208L422-765h-4L316-494Z",
    fill: "currentColor"
  }));
};
export default SvgTextFieldsAlt;