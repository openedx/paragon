function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWifiProxy = function SvgWifiProxy(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M700-180h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Zm-170 60v-280h170v110h110v170H640Zm-160 0L0-600q99-94 221-147t259-53q137 0 259 53t221 147L840-479l-20.5-20.5L799-520l73-74q-87-68-184.5-107T480-740q-110 0-207.5 39T88-594l392 392 60-60 20.5 20.5L581-221 480-120Zm0-351Z",
    fill: "currentColor"
  }));
};
export default SvgWifiProxy;