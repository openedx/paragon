function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVolcanoFill = function SvgVolcanoFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m80-80 160-360h120l80-200h280L880-80H80Zm463-700v-140h60v140h-60Zm181 76-42-42 99-99 43 42-100 99Zm-302 0-99-99 42-43 99 100-42 42Z",
    fill: "currentColor"
  }));
};
export default SvgVolcanoFill;