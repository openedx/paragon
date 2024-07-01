function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgQuizFill = function SvgQuizFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M543-340q16.6 0 28.8-12.2T584-381q0-16.6-12.2-28.8T543-422q-16.6 0-28.8 12.2T502-381q0 16.6 12.2 28.8T543-340Zm-25-126h47q2-29 8.5-43t32.5-39q27-26 37.5-45.4Q654-612.79 654-639q0-45.88-31.5-74.94Q591-743 540-743q-38 0-68 20.5T428-665l45 19q11-25 27.5-38t39.5-13q29.78 0 48.39 17T607-637q0 20-9 35t-32 32q-32 29-40 46.5t-8 57.5ZM200-200v-680h680v680H200ZM80-80v-680h60v620h620v60H80Z",
    fill: "currentColor"
  }));
};
export default SvgQuizFill;