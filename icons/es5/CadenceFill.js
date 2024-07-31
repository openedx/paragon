function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCadenceFill = function SvgCadenceFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-120v-555h60v555h-60ZM284-244v-308h60v308h-60Zm331 0v-308h60v308h-60ZM120-368v-60h60v60h-60Zm660 0v-60h60v60h-60ZM80-574v-60h37q47 0 87-22.5t63-62.5q34-57 90.5-89T480-840q66 0 122.5 32t89.5 89q24 40 64 62.5t87 22.5h37v60h-37q-63 0-116.5-30T641-688q-26-43-68.5-67.5T480-780q-50 0-92.5 24.5T319-688q-32 54-85.5 84T117-574H80Z",
    fill: "currentColor"
  }));
};
export default SvgCadenceFill;