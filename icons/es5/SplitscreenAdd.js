function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSplitscreenAdd = function SvgSplitscreenAdd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-180v-188 32-4 160Zm-60 60v-308h720v60H180v188h440v60H120Zm0-413v-307h720v307H120Zm60-60h600v-187H180v187Zm0 0v-187 187Zm600 473h-80v-60h80v-80h60v80h80v60h-80v80h-60v-80Z",
    fill: "currentColor"
  }));
};
export default SvgSplitscreenAdd;