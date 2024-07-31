function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSplitscreenVerticalAdd = function SvgSplitscreenVerticalAdd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M780-780H620h4-32 188Zm-248-60h308v500h-60v-440H592v660h-60v-720ZM120-120v-720h307v720H120Zm247-660H180v600h187v-600Zm0 0H180h187ZM780-40v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Z",
    fill: "currentColor"
  }));
};
export default SvgSplitscreenVerticalAdd;