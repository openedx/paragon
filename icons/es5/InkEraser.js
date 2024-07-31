function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgInkEraser = function SvgInkEraser(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M678-220h203v60H618l60-60Zm-499 60L58-285l537-584 288 302-380 407H179Zm301-60 324-352-207-217-455 503 64 66h274Zm0-260Z",
    fill: "currentColor"
  }));
};
export default SvgInkEraser;