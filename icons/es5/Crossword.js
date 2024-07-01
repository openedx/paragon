function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCrossword = function SvgCrossword(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M386-140h187v-186H386v186ZM140-386h186v-187H140v187Zm246 0h187v-187H386v187Zm247 0h187v-187H633v187Zm0-247h187v-187H633v187ZM326-80v-246H80v-307h493v-247h307v554H633v246H326Z",
    fill: "currentColor"
  }));
};
export default SvgCrossword;