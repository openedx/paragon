function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterOrp = function SvgWaterOrp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M400-880q161 137 240.5 254.5T720-408v14q0 7-1 14h-60q1-7 1-14v-14q0-79-66.5-179.5T400-800Q273-688 206.5-587.5T140-408q0 54 17.5 100.5T206-226v82q-58-45-92-113T80-408q0-100 79.5-217.5T400-880Zm0 367ZM266-86v-228h168v228H266Zm48-48h72v-132h-72v132Zm166 54v-240h194v153h-38l35 87h-52l-34-86h-57v86h-48Zm246 0v-240h194v154H774v86h-48ZM528-214h98v-58h-98v58Zm246 0h98v-58h-98v58Z",
    fill: "currentColor"
  }));
};
export default SvgWaterOrp;