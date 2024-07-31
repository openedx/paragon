function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBalconyFill = function SvgBalconyFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M330-500v-60h60v60h-60Zm240 0v-60h60v60h-60ZM120-80v-320h40v-160q0-66 25-124.5t68.5-102Q297-830 355.5-855T480-880q66 0 124.5 25t102 68.5Q750-743 775-684.5T800-560v160h40v320H120Zm60-60h105v-200H180v200Zm165 0h105v-200H345v200ZM220-400h230v-418q-99 12-164.5 85T220-560v160Zm290 0h230v-160q0-100-65.5-173T510-818v418Zm0 260h105v-200H510v200Zm165 0h105v-200H675v200Z",
    fill: "currentColor"
  }));
};
export default SvgBalconyFill;