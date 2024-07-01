function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMoveLocationFill = function SvgMoveLocationFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M400-80Q239-217 159.5-334.5T80-552q0-150 96.5-239T400-880q127 0 223.5 89T720-552q0 16-1.5 32.5T712-486q-54 6-95.5 33T549-385q-26 41-33.5 89.5T525-197q-28 29-59 58t-66 59Zm0-290q51 0 92.5-24t66.5-64q-34-26-74-39t-85-13q-45 0-85 13t-74 39q25 40 66.5 64t92.5 24Zm0-200q29 0 49.5-20.5T470-640q0-29-20.5-49.5T400-710q-29 0-49.5 20.5T330-640q0 29 20.5 49.5T400-570Zm351 450-42-42 73-74H577v-60h205l-73-74 42-42 146 146-146 146Z",
    fill: "currentColor"
  }));
};
export default SvgMoveLocationFill;