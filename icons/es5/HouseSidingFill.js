function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHouseSidingFill = function SvgHouseSidingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M201-120v-432L76-457l-36-47 440-336 440 336-37 47-125-96v433h-60v-120H261v120h-60Zm60-340h437v-100H261v100Zm0 160h437v-100H261v100Zm29-320h380L480-765 290-620Z",
    fill: "currentColor"
  }));
};
export default SvgHouseSidingFill;