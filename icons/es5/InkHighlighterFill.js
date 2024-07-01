function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgInkHighlighterFill = function SvgInkHighlighterFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m70-120 120-120-38-38v-42l244-244 200 200-243 243h-43l-42-42-43 43H70Zm369-487 259-259 200 200-259 259-200-200Z",
    fill: "currentColor"
  }));
};
export default SvgInkHighlighterFill;