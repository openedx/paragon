function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStylusNote = function SvgStylusNote(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m499-259 364-363-81-80-363 363 80 80Zm-280 48q-88-6-133.5-40.5T40-349q0-60 51-98t142-46q44-4 65.5-16t21.5-33q0-29-29-44.5T194-609l5-60q89 9 135 41t46 86q0 46-37.5 75T238-433q-69 5-103.5 26T100-349q0 35 30.5 54.5T222-271l-3 60Zm299 18L353-358l429-429 166 165-430 429Zm0 0-208 43 43-208 165 165Z",
    fill: "currentColor"
  }));
};
export default SvgStylusNote;