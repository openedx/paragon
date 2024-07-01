function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDestruction = function SvgDestruction(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-80v-320h720v320H120Zm60-60h600v-200H180v200Zm72-319L63-568l242-40.73L240-848l201 144 121-217 41 245 236-66-142 203 139 80H713l-98-64 75-112-135 29-24-132-72 123-116-85 37 139-141 25 129 77H252Zm228 219Zm-4-219Z",
    fill: "currentColor"
  }));
};
export default SvgDestruction;