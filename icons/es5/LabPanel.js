function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLabPanel = function SvgLabPanel(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-120v-360h80v-163H80v-197h360v197h-40v163h160v-163h-40v-197h360v197h-40v163h80v360H40Zm540-580h240v-80H580v80Zm-440 0h240v-80H140v80Zm480 220h160v-160H620v160Zm-440 0h160v-160H180v160Zm-80 300h760v-240H100v240Zm40-520v-80 80Zm440 0v-80 80ZM100-180v-240 240Z",
    fill: "currentColor"
  }));
};
export default SvgLabPanel;