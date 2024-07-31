function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPersonalBag = function SvgPersonalBag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-80v-410q0-88 49-158.5T375-751v-19q0-44 30.68-77 30.67-33 74.5-33 43.82 0 74.32 33 30.5 33 30.5 77v19q77 32 126 102.5T760-490v410H200Zm60-60h440v-350.17q0-90.83-64.29-155.33-64.29-64.5-155.5-64.5T324.5-645.65Q260-581.3 260-490v350Zm30-280h320v90h60v-150H290v60Zm145-348q5-1 20.5-1.5t24.5-.5q9 0 24.5.5T525-768v-2q0-20-12.5-35T480-820q-20 0-32.5 15T435-770v2ZM260-140h440-440Z",
    fill: "currentColor"
  }));
};
export default SvgPersonalBag;