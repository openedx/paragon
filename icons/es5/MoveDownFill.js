function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMoveDownFill = function SvgMoveDownFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m280-120-43-43 86-86q-116 6-199.5-73.5T40-520q0-117 81.5-198.5T320-800h120v60H320q-92 0-156 64t-64 156q0 91 67 152.5T326-308l-89-89 43-43 160 160-160 160Zm240-40v-280h360v280H520Zm0-360v-280h360v280H520Zm60-60h240v-160H580v160Z",
    fill: "currentColor"
  }));
};
export default SvgMoveDownFill;