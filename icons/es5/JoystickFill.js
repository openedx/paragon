function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgJoystickFill = function SvgJoystickFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-635v-28q-43-11-71.5-46T350-790q0-54 38-92t92-38q54 0 92 38t38 92q0 46-28.5 81T510-663v28l330 190v170L510-85q-14 8-30 8t-30-8L120-275v-170l330-190ZM225-436l255 147 254-148-224-129v146h-60v-146L225-436Z",
    fill: "currentColor"
  }));
};
export default SvgJoystickFill;