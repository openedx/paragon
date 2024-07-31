function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAlarmFill = function SvgAlarmFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M479-82q-74 0-139.5-28t-114-77q-48.5-49-77-114T120-441q0-74 28.5-139.5t77-114.5q48.5-49 114-77T479-800q74 0 139.5 28T733-695q49 49 77 114.5T838-441q0 75-28 140t-77 114q-49 49-114.5 77T479-82Zm121-196 42-42-130-130v-190h-60v214l148 148ZM214-867l42 42L92-667l-42-42 164-158Zm530 0 164 158-42 42-164-158 42-42Z",
    fill: "currentColor"
  }));
};
export default SvgAlarmFill;