function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAbcFill = function SvgAbcFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M633-360v-240h207v80h-48v-32H681v144h111v-32h48v80H633Zm-253 0v-240h183l24 24v72l-24 24 24 24v72l-24 24H380Zm48-144h111v-48H428v48Zm0 96h111v-48H428v48Zm-308 48v-240h207v240h-48v-77H168v77h-48Zm48-125h111v-67H168v67Z",
    fill: "currentColor"
  }));
};
export default SvgAbcFill;