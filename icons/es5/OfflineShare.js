function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgOfflineShare(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 5H4v18h12v-2H6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 1H8v18h12V1zm-2 14h-8V5h8v10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 10.25h2V12L17 9.5 14.5 7v1.75H11V12h1.5z"
  }));
}

export default SvgOfflineShare;