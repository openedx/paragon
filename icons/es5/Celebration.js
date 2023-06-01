function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgCelebration(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2 22l14-5-9-9zm12.53-9.47L21 6.05l1.48 1.48 1.06-1.06L21 3.93l-7.53 7.53 1.06 1.07zM10.94 6L9.47 7.47l1.06 1.06 2.54-2.54-2.54-2.53-1.06 1.07L10.94 6zm8.03 3.97l-3.5 3.5 1.06 1.06L19 12.06l2.5 2.49 1.06-1.06-3.59-3.52z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.97 4.97l-4.5 4.5 1.06 1.06L18.07 5l-3.53-3.53-1.06 1.06 2.49 2.44z",
    fill: "currentColor"
  }));
}
export default SvgCelebration;