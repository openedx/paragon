function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgJoystick = function SvgJoystick(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-635v-28q-43-11-71.5-45.99T350-790q0-53.86 38.1-91.93 38.1-38.07 92-38.07t91.9 38.07q38 38.07 38 91.93 0 46.02-28.5 81.01T510-663v28l330 190v170L510-85q-14.33 8-30.16 8Q464-77 450-85L120-275v-170l330-190ZM180-393v83l300 173 300-173v-84L480-220 180-393Zm299.88-327q29.12 0 49.62-20.38 20.5-20.38 20.5-49.5t-20.38-49.62q-20.38-20.5-49.5-20.5t-49.62 20.38q-20.5 20.38-20.5 49.5t20.38 49.62q20.38 20.5 49.5 20.5Zm.12 583ZM225-436l255 147 254-148-224-129v146h-60v-146L225-436Z",
    fill: "currentColor"
  }));
};
export default SvgJoystick;