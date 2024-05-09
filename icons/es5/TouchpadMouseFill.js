function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTouchpadMouseFill = function SvgTouchpadMouseFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M660-80q-91 0-155.5-64.5T440-300v-70h440v70q0 91-64 155.5T660-80ZM80-160v-640h800v206q-40-51-97.5-78.5T660-700q-117 0-198.5 81.5T380-420v120q0 37 9.5 72.5T417-160H80Zm360-270q4-80 57.5-138.5T630-639v209H440Zm250 0v-209q79 12 132.5 70.5T880-430H690Z",
    fill: "currentColor"
  }));
};
export default SvgTouchpadMouseFill;