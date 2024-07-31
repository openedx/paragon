function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAttachmentFill = function SvgAttachmentFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M326-243q-103 0-174.5-72.18-71.5-72.17-71.5-175Q80-593 151.5-665.5T326-738h380q72.5 0 123.25 51.5T880-563q0 72-50.75 123.5T706-388H346q-42 0-72-30t-30-72.5q0-42.5 29.67-72.5 29.68-30 72.33-30h370v60H346q-17 0-29.5 12.5T304-489.86q0 18.14 12.5 30T346-448h360q48 0 81-33.5t33-81.71q0-48.21-33.06-81.5T706-678H326q-78 0-132 54.97T140-490q0 77.92 54 132.46Q248-303 326-303h390v60H326Z",
    fill: "currentColor"
  }));
};
export default SvgAttachmentFill;