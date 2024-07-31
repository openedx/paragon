function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScoreboardFill = function SvgScoreboardFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M573-365h169v-230H573v230Zm50-50v-130h69v130h-69Zm-405 50h169v-50H268v-41h119v-139H218v50h119v41H218v139Zm237-158h50v-60h-50v60Zm0 146h50v-60h-50v60ZM80-160v-640h210v-80h60v80h260v-80h60v80h210v640H80Zm375-510h50v-60h-50v60Zm0 440h50v-60h-50v60Z",
    fill: "currentColor"
  }));
};
export default SvgScoreboardFill;