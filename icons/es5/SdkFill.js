function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSdkFill = function SvgSdkFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-612l83-108h555l82 107v613H120Zm78-615h564l-36-45H234l-36 45Zm442 308-90 90 40 40 130-130-130-130-40 40 90 90Zm-320 4 90-90-40-40-130 130 130 130 40-40-90-90Z",
    fill: "currentColor"
  }));
};
export default SvgSdkFill;