function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEmoticon = function SvgEmoticon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M250-280q-21 0-35.5-14.5T200-330q0-20 14.5-35t35.5-15q20 0 35 15t15 35q0 21-15 35.5T250-280Zm0-300q-21 0-35.5-14.5T200-630q0-20 14.5-35t35.5-15q20 0 35 15t15 35q0 21-15 35.5T250-580Zm150 130v-60h160v60H400Zm289 205-49-33q29-45 44.5-95.5T700-480q0-67-22-127t-63-108l46-38q46 56 72.5 125.5T760-480q0 66-19 125t-52 110Z",
    fill: "currentColor"
  }));
};
export default SvgEmoticon;