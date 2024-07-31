function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLda = function SvgLda(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-80v-133L200-318v-202h250v-120H320v-240h320v240H510v120h250v202L510-213v133h-60Zm-70-620h200v-120H380v120Zm70 422v-182H260v102l190 80Zm60 0 190-80v-102H510v182ZM380-700v-120 120Z",
    fill: "currentColor"
  }));
};
export default SvgLda;