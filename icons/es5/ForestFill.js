function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgForestFill = function SvgForestFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M543-80v-119h115v119H543Zm-240 0v-149H0l189-274H94l266-377 266 377h-94l189 274H418v149H303Zm455-149L590-473h93L499-737l101-143 266 377h-94l188 274H758Z",
    fill: "currentColor"
  }));
};
export default SvgForestFill;