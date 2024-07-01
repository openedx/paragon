function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTextureFill = function SvgTextureFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M124-121v-44.76L795-838h42v43.76L165-121h-41Zm-4-277v-86l356-356h86L120-398Zm0-320v-122h122L120-718Zm598 598 122-122v122H718Zm-320 0 442-442v86L484-120h-86Z",
    fill: "currentColor"
  }));
};
export default SvgTextureFill;