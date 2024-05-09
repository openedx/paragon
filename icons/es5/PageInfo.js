function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPageInfo = function SvgPageInfo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M710-140q-63 0-106.5-43.5T560-290q0-63 43.5-106.5T710-440q63 0 106.5 43.5T860-290q0 63-43.5 106.5T710-140Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm-590-60v-60h360v60H120Zm130-260q-63 0-106.5-43.5T100-670q0-63 43.5-106.5T250-820q63 0 106.5 43.5T400-670q0 63-43.5 106.5T250-520Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm230-60v-60h360v60H480Zm230 350ZM250-670Z",
    fill: "currentColor"
  }));
};
export default SvgPageInfo;