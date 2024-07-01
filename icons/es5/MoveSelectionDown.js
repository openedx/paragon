function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMoveSelectionDown = function SvgMoveSelectionDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M240-80v-480h480v480H240Zm60-60h360v-360H300v360Zm-60-520v-60h60v60h-60Zm420 0v-60h60v60h-60ZM240-820v-60h60v60h-60Zm210 0v-60h60v60h-60Zm210 0v-60h60v60h-60ZM480-320Z",
    fill: "currentColor"
  }));
};
export default SvgMoveSelectionDown;