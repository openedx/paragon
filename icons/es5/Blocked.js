function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgBlocked = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8Zm0 14.4A6.398 6.398 0 0 1 1.6 8c0-1.48.504-2.84 1.352-3.92l8.968 8.968A6.322 6.322 0 0 1 8 14.4Zm5.048-2.48L4.08 2.952A6.322 6.322 0 0 1 8 1.6c3.536 0 6.4 2.864 6.4 6.4 0 1.48-.504 2.84-1.352 3.92Z",
  fill: "currentColor"
}));
export default SvgBlocked;