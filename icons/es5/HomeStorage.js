function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHomeStorage = function SvgHomeStorage(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m200-120-80-480h720l-80 480H200Zm50-60h460l57-360H193l57 360Zm120-200h220v-60H370v60ZM210-660v-60h540v60H210Zm80-120v-60h380v60H290Zm-40 600h460-460Z",
    fill: "currentColor"
  }));
};
export default SvgHomeStorage;