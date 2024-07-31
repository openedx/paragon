function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNotificationsPausedFill = function SvgNotificationsPausedFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-200v-60h80v-304q0-84 49.5-150.5T420-798v-82h120v82q81 17 130.5 83.5T720-564v304h80v60H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM378-340h205v-56H459l124-159v-56H378v56h123L378-396v56Z",
    fill: "currentColor"
  }));
};
export default SvgNotificationsPausedFill;