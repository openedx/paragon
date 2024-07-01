function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWineBarFill = function SvgWineBarFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M320-120v-60h130v-185q-99-14-154.5-79.5T240-600v-240h480v240q0 90-55.5 155.5T510-365v185h130v60H320Zm-20-510h360v-150H300v150Z",
    fill: "currentColor"
  }));
};
export default SvgWineBarFill;