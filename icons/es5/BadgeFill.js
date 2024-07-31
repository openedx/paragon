function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBadgeFill = function SvgBadgeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M232-247h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408-418q0-22.5-15.75-38.25T354-472q-22.5 0-38.25 15.75T300-418q0 22.5 15.75 38.25T354-364Zm214-63h170v-50H568v50ZM80-80v-600h310v-200h180v200h310v600H80Zm370-510h60v-230h-60v230Z",
    fill: "currentColor"
  }));
};
export default SvgBadgeFill;