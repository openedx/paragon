function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRecenter = function SvgRecenter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-40v-187l-55 55-43-42 128-128 128 128-42 42-56-55v187h-60ZM214-352l-42-43 55-55H40v-60h187l-55-56 42-42 128 128-128 128Zm533 0L619-480l128-128 42 42-55 56h186v60H734l55 55-42 43Zm-267-78q-21 0-35.5-14.5T430-480q0-21 14.5-36.5T480-532q22 0 37 15t15 37q0 21-15.5 35.5T480-430Zm0-189L352-747l43-42 55 55v-186h60v186l56-55 42 42-128 128Z",
    fill: "currentColor"
  }));
};
export default SvgRecenter;