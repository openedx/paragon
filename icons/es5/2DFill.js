function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var Svg2DFill = function Svg2DFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M263-360h170v-50H313v-53h120v-137H263v50h120v54H263v136ZM120-120v-720h720v720H120Zm400-237h178l22-23v-201l-22-22H520v246Zm50-50v-146h100v146H570Z",
    fill: "currentColor"
  }));
};
export default Svg2DFill;