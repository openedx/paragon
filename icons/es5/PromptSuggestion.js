function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPromptSuggestion = function SvgPromptSuggestion(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m607-200-43-43 161-163H295q-73 0-124-52t-51-125q0-74 51-126t124-52h9v60h-9q-48 0-81.5 34.5T180-583q0 48 33.5 82.5T295-466h430L564-629l43-42 233 235-233 236Z",
    fill: "currentColor"
  }));
};
export default SvgPromptSuggestion;