function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMoveSelectionUp = function SvgMoveSelectionUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M240-400v-480h480v480H240Zm60-60h360v-360H300v360Zm360 220v-60h60v60h-60Zm-420 0v-60h60v60h-60ZM660-80v-60h60v60h-60Zm-210 0v-60h60v60h-60Zm-210 0v-60h60v60h-60Zm240-560Z",
    fill: "currentColor"
  }));
};
export default SvgMoveSelectionUp;