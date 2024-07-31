function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNestMultiRoom = function SvgNestMultiRoom(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-120v-480l320-240 320 240v480H160Zm60-60h310v-145H220v145Zm370 0h150v-145H590v145ZM220-385h150v-145H220v145Zm210 0h310v-145H430v145ZM247-590h466L480-763 247-590Z",
    fill: "currentColor"
  }));
};
export default SvgNestMultiRoom;