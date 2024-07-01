function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDataObjectFill = function SvgDataObjectFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M570-160v-60h170v-250h80v-20h-80v-250H570v-60h230v254h80v132h-80v254H570Zm-410 0v-254H80v-132h80v-254h230v60H220v250h-80v20h80v250h170v60H160Z",
    fill: "currentColor"
  }));
};
export default SvgDataObjectFill;