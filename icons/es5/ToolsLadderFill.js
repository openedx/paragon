function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgToolsLadderFill = function SvgToolsLadderFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m188-120 200-720h58l-36 130h266l37-130h58L573-120h-59l35-130H283l-36 130h-59Zm167-390h266l39-140H394l-39 140Zm-56 200h267l39-140H338l-39 140Z",
    fill: "currentColor"
  }));
};
export default SvgToolsLadderFill;