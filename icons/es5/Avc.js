function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAvc = function SvgAvc(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-357h50v-65h70v65h50v-246H180v246Zm50-115v-81h70v81h-70Zm218 115h57l75-246h-50l-53 183-47-183h-50l68 246Zm162 0h170v-72h-50v22h-70v-146h70v22h50v-72H610v246ZM40-160v-640h880v640H40Zm60-60h760v-520H100v520Zm0 0v-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgAvc;