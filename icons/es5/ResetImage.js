function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgResetImage = function SvgResetImage(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-580v-230h60v131q48-73 127-117t173-44q128 0 224 75.5T829-580h-62q-29-84-107-142t-180-58q-81 0-147.5 38.5T226-640h124v60H120Zm116 343h489L578-433 446-262l-93-127-117 152ZM120-80v-420h60v360h600v-360h60v420H120Z",
    fill: "currentColor"
  }));
};
export default SvgResetImage;