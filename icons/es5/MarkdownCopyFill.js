function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMarkdownCopyFill = function SvgMarkdownCopyFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M240-200v-680h560v680H240ZM120-80v-680h60v620h500v60H120Zm269-340h50v-190h57v127h50v-127h56v190h50v-240H389v240Z",
    fill: "currentColor"
  }));
};
export default SvgMarkdownCopyFill;