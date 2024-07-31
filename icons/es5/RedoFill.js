function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRedoFill = function SvgRedoFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M392-200q-95 0-163.5-64T160-422q0-94 68.5-158T392-644h294L572-758l42-42 186 186-186 186-42-42 114-114H391q-70 0-120.5 46.5T220-422q0 69 50.5 115.5T391-260h310v60H392Z",
    fill: "currentColor"
  }));
};
export default SvgRedoFill;