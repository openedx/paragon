function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgContract = function SvgContract(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M225-80q-43.75 0-74.37-30.63Q120-141.25 120-185v-135h120v-560h600v695q0 43.75-30.62 74.37Q778.75-80 735-80H225Zm509.91-60Q754-140 767-152.94q13-12.94 13-32.06v-635H300v500h390v135q0 19.12 12.91 32.06 12.91 12.94 32 12.94ZM360-640v-60h360v60H360Zm0 120v-60h360v60H360ZM224-140h406v-120H180v75q0 19.12 13 32.06Q206-140 224-140Zm0 0h-44 450-406Z",
    fill: "currentColor"
  }));
};
export default SvgContract;