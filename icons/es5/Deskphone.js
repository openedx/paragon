function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDeskphone = function SvgDeskphone(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M660-180h120v-600H660v600ZM250-410h60v-60h-60v60Zm0 120h60v-60h-60v60Zm0-240h300v-140H250v140Zm120 120h60v-60h-60v60Zm0 120h60v-60h-60v60Zm120-120h60v-60h-60v60Zm0 120h60v-60h-60v60Zm110 70v-520H180v520h420Zm-480 60v-640h480v-40h240v720H600v-40H120Zm60-60v-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgDeskphone;