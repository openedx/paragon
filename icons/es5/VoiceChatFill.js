function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVoiceChatFill = function SvgVoiceChatFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M250-530h40v-60h-40v60Zm100 80h40v-220h-40v220Zm110 80h40v-380h-40v380Zm110-80h40v-220h-40v220Zm100-80h40v-60h-40v60ZM80-80v-800h800v640H240L80-80Z",
    fill: "currentColor"
  }));
};
export default SvgVoiceChatFill;