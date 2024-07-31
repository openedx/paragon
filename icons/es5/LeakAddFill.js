function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLeakAddFill = function SvgLeakAddFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-404v-60q78 0 146.36-29.6 68.36-29.61 119.5-80.5Q437-625 466.5-693.7 496-762.39 496-840h60q0 90.17-34.19 169.45-34.18 79.27-93.64 138.72-59.45 59.46-138.72 93.64Q210.17-404 120-404Zm0-120v-60q106.24 0 181.12-74.88Q376-733.76 376-840h60q0 132-92 224t-224 92Zm0-120v-196h196q0 81-57.5 138.5T120-644Zm284 524q0-90.17 34.19-169.45 34.18-79.27 93.64-138.72 59.45-59.46 138.72-93.64Q749.83-556 840-556v60q-78 0-146.36 29.6-68.36 29.61-119.5 80.5Q523-335 493.5-266.3 464-197.61 464-120h-60Zm120 0q0-132 92-224t224-92v60q-106.24 0-181.12 74.88Q584-226.24 584-120h-60Zm120 0q0-81 57.5-138.5T840-316v196H644Z",
    fill: "currentColor"
  }));
};
export default SvgLeakAddFill;