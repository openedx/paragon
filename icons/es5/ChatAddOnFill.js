function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgChatAddOnFill = function SvgChatAddOnFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-620h320v-60H280v60Zm0 170h200v-60H280v60Zm410 280v-120H570v-60h120v-120h60v120h120v60H750v120h-60Zm-570 10v-680h640v283q-10-2-20-2.5t-20-.5q-95 0-167.5 73T480-320q0 10 .5 20t2.5 20H240L120-160Z",
    fill: "currentColor"
  }));
};
export default SvgChatAddOnFill;