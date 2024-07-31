function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgInkHighlighter = function SvgInkHighlighter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m554-407-58-57-57-58-222 222 115 115 222-222Zm-72-158 57 58 58 57 213-213-115-115-213 213ZM70-120l120-120-38-38v-42l266-266 200 200-265 265h-43l-42-42-43 43H70Zm348-466 280-280 200 200-280 280-200-200Z",
    fill: "currentColor"
  }));
};
export default SvgInkHighlighter;