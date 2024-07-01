function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCssFill = function SvgCssFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M380-360v-80h48v32h104v-53H380v-139h200v80h-48v-32H428v53h152v139H380Zm260 0v-80h48v32h104v-53H640v-139h200v80h-48v-32H688v53h152v139H640Zm-520 0v-240h200v80h-48v-32H168v144h104v-32h48v80H120Z",
    fill: "currentColor"
  }));
};
export default SvgCssFill;