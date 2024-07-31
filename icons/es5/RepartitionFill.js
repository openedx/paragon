function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRepartitionFill = function SvgRepartitionFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-400v-60h558q42.08 0 72.04-29.95 29.96-29.94 29.96-72Q780-604 750.04-634T678-664H195l74 73-43 43L80-694l146-146 43 42-74 74h483q66.83 0 114.41 47.62Q840-628.75 840-561.88q0 66.88-47.59 114.38Q744.83-400 678-400H120Zm0 320v-240h720v240H120Zm60-60h163v-120H180v120Zm223 0h153v-120H403v120Zm214 0h163v-120H617v120Z",
    fill: "currentColor"
  }));
};
export default SvgRepartitionFill;