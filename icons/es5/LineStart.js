function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLineStart = function SvgLineStart(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M170-390q-37.8 0-63.9-26.14t-26.1-64Q80-518 106.1-544t63.9-26q29.09 0 52.54 17Q246-536 255-510h625v60H255q-9 26-32.46 43-23.45 17-52.54 17Z",
    fill: "currentColor"
  }));
};
export default SvgLineStart;