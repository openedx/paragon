function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRingVolumeFill = function SvgRingVolumeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M158-124 22-260l31-35q82-90 193.5-137.5T480-480q121 0 233 47.5T907-295l31 35-136 136-151-113v-154q-42-16-85.5-22.5T480-420q-42 0-85.5 6.5T309-391v154L158-124Zm292-568v-188h60v188h-60Zm260 112-43-44 133-131 39 44-129 131Zm-456 0L120-711l43-44 130 131-39 44Z",
    fill: "currentColor"
  }));
};
export default SvgRingVolumeFill;