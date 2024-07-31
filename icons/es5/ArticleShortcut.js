function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgArticleShortcut = function SvgArticleShortcut(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-480ZM255-80q-74.84 0-127.42-52T75-259q0-53 27-95.5t72-65.5H80v-60h220v220h-60v-119q-45 5-75 39t-30 80q0 50.18 35 85.09Q205-140 255-140v60Zm105-40v-60h420v-600H180v240h-60v-300h720v720H360Zm0-159h192v-60H360v60Zm0-171h323v-60H360v60Zm-83-171h406v-60H277v60Z",
    fill: "currentColor"
  }));
};
export default SvgArticleShortcut;