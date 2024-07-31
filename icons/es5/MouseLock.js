function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMouseLock = function SvgMouseLock(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M593-80v-206h42v-40q0-36 23.5-61t58.5-25q35 0 58 25t23 61v40h42v206H593Zm82-206h84v-40q0-19.55-11.5-32.77Q736-372 716.5-372T686-358.77q-11 13.22-11 32.77v40ZM480-560Zm0 480q-118 0-199-81t-81-199v-260q0-118 81-199t199-81q118 0 199 81t81 199v167q-15-4-30-5t-30 1v-103H260v200q0 91.3 64.35 155.65Q388.7-140 480-140q16 0 31.5-2t29.5-7v63q-15 3-30 4.5T480-80ZM260-620h190v-218q-84 11-137 74t-53 144Zm250 0h190q0-81-53-144t-137-74v218Zm-30 60Zm30-60Zm-60 0Z",
    fill: "currentColor"
  }));
};
export default SvgMouseLock;