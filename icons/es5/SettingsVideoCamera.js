function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSettingsVideoCamera = function SvgSettingsVideoCamera(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M517-80v-320h320v120l80-80v240l-80-80v120H517Zm-37-400Zm0-130q-54 0-92 38t-38 92q0 43 24 76t62 47v-68q-11-9-18.5-24.5T410-480q0-29 20.5-49.5T480-550q29 0 49 20t20 49h60q0-54-37.5-91.5T480-610ZM388-80l-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q1 10 1.5 21.5t.5 20.5h-60q0-20-2-35.5t-6-30.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q26 26 59.5 43.5T436-249v169h-48Z",
    fill: "currentColor"
  }));
};
export default SvgSettingsVideoCamera;