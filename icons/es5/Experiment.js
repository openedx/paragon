function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgExperiment = function SvgExperiment(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M172-120q-42 0-59.5-39t11.5-71l248-280v-270h-82v-60h380v60h-82v270l248 280q29 32 11.5 71T788-120H172Zm70-90h476L558-395H402L242-210Zm-82 30h640L528-488v-292h-96v292L160-180Zm320-300Z",
    fill: "currentColor"
  }));
};
export default SvgExperiment;