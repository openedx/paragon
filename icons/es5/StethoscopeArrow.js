function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStethoscopeArrow = function SvgStethoscopeArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m720-120-42-42 87-88H560v-60h205l-87-88 42-42 160 160-160 160ZM540-81q-112 0-186-78.5T280-347v-35q-85-11-142.5-75.5T80-610v-230h120v-40h60v140h-60v-40h-60v170q0 71 49.5 120.5T310-440q71 0 120.5-49.5T480-610v-170h-60v40h-60v-140h60v40h120v230q0 88-57.5 152.5T340-382v35q0 85 56.5 145.5T540-141v60Z",
    fill: "currentColor"
  }));
};
export default SvgStethoscopeArrow;