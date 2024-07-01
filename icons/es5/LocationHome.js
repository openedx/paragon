function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLocationHome = function SvgLocationHome(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m480-840 320 240v480H160v-480l320-240Zm.12 470Q526-370 558-402.12q32-32.12 32-78T557.88-558q-32.12-32-78-32T402-557.88q-32 32.12-32 78T402.12-402q32.12 32 78 32Zm.06-60q-21.18 0-35.68-14.32-14.5-14.33-14.5-35.5 0-21.18 14.32-35.68 14.33-14.5 35.5-14.5 21.18 0 35.68 14.32 14.5 14.33 14.5 35.5 0 21.18-14.32 35.68-14.33 14.5-35.5 14.5ZM479-250q-55 0-106.5 18T278-180h403q-44-34-95.5-52T479-250ZM220-574v365q54-48 120.52-74.5Q407.03-310 479-310q72.67 0 139.84 27Q686-256 740-208v-366L480-763 220-574Zm260 94Z",
    fill: "currentColor"
  }));
};
export default SvgLocationHome;