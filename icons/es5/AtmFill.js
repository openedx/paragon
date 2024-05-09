function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAtmFill = function SvgAtmFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M409-360v-192h-80v-48h208v48h-80v192h-48Zm-329 0v-240h207v240h-48v-77H128v77H80Zm48-125h111v-67H128v67Zm458 125v-240h294v240h-48v-192h-75v150h-48v-150h-75v192h-48Z",
    fill: "currentColor"
  }));
};
export default SvgAtmFill;