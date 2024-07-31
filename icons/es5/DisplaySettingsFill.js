function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDisplaySettingsFill = function SvgDisplaySettingsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M300-370h40v-140h-40v50h-60v40h60v50Zm100-50h320v-40H400v40Zm220-110h40v-50h60v-40h-60v-50h-40v140Zm-380-50h320v-40H240v40Zm90 460v-80H80v-640h800v640H630v80H330Z",
    fill: "currentColor"
  }));
};
export default SvgDisplaySettingsFill;