function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgIos = function SvgIos(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-615v-60h60v60h-60Zm0 335v-275h60v275h-60Zm127 0v-400h225v400H287Zm60-60h105v-280H347v280Zm228 60v-60h165v-114H575v-226h225v60H635v106h165v234H575Z",
    fill: "currentColor"
  }));
};
export default SvgIos;