function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFileSave = function SvgFileSave(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m730-124 146-146-42-42-74 74v-181h-60v181l-74-74-42 42 146 146ZM580 0v-60h300V0H580ZM160-160v-720h366l234 234v167h-60v-141H500v-200H220v600h300v60H160Zm60-60v-600 600Z",
    fill: "currentColor"
  }));
};
export default SvgFileSave;