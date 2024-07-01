function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSourceEnvironment = function SvgSourceEnvironment(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-670l195-130 195 130v115h410v555H80Zm60-60h105v-105H140v105Zm0-165h105v-105H140v105Zm0-165h105v-105H140v105Zm0-165h105v-105H140v105Zm165 0h105v-105H305v105Zm0 495h515v-435H305v435Zm245-270v-60h165v60H550Zm0 165v-60h165v60H550ZM410-450v-60h60v60h-60Zm0 165v-60h60v60h-60Z",
    fill: "currentColor"
  }));
};
export default SvgSourceEnvironment;