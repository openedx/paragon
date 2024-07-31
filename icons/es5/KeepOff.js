function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgKeepOff = function SvgKeepOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M664-840v60h-30v394l-60-60v-334H380v140l-60-60v-80h-30v-60h374ZM480-40l-30-30v-241H240v-60l80-77v-84L55-797l42-42L846-89l-42 42-264-264h-30v241l-30 30ZM321-371h159L380-471v45l-59 55Zm156-172Zm-97 72Z",
    fill: "currentColor"
  }));
};
export default SvgKeepOff;