function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPersonEdit = function SvgPersonEdit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M500-220Zm-340 60v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q38.02 0 75.01 6T630-397l-48 47q-26-5-50.9-7.5-24.89-2.5-51.1-2.5-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34h280v60H160Zm400 40v-123l263-262 122 122-262 263H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM480-481q-63 0-106.5-43.5T330-631q0-63 43.5-106.5T480-781q63 0 106.5 43.5T630-631q0 63-43.5 106.5T480-481Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z",
    fill: "currentColor"
  }));
};
export default SvgPersonEdit;