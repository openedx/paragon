function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEditorChoice = function SvgEditorChoice(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M250-40v-343L122-590l179-290h358l179 290-128 207v343l-230-77-230 77Zm60-84 170-55 170 55v-176H310v176Zm24-696L192-590l142 230h292l142-230-142-230H334Zm104 379L310-568l43-43 85 85 169-170 43 42-212 213ZM310-300h340-340Z",
    fill: "currentColor"
  }));
};
export default SvgEditorChoice;