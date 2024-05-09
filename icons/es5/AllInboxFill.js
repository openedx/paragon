function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAllInboxFill = function SvgAllInboxFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M540-396q38 0 65.02-25.56 27.02-25.55 27.02-61.44H820v-337H260v337h188q0 35.89 27.02 61.44Q502.05-396 540-396ZM200-200v-680h680v680H200ZM80-80v-680h60v620h620v60H80Z",
    fill: "currentColor"
  }));
};
export default SvgAllInboxFill;