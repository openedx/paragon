function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScreenshotTablet = function SvgScreenshotTablet(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-160v-640h880v640H40Zm90-580h-30v520h30v-520Zm60 520h580v-520H190v520Zm640-520v520h30v-520h-30Zm0 0h30-30Zm-700 0h-30 30Zm420 460h160v-160h-40v120H550v40ZM250-520h40v-120h120v-40H250v160Z",
    fill: "currentColor"
  }));
};
export default SvgScreenshotTablet;