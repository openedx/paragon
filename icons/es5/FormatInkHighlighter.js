function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFormatInkHighlighter = function SvgFormatInkHighlighter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80 0v-121h800V0H80Zm501-474-58-57-57-58-182 182 115 115 182-182Zm-72-158 57 58 58 57 186-186-115-115-186 186ZM137-227l120-120-38-38v-42l226-226 200 200-225 225h-43l-42-42-43 43H137Zm308-426 253-253 200 200-253 253-200-200Z",
    fill: "currentColor"
  }));
};
export default SvgFormatInkHighlighter;