function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNoteStackAdd = function SvgNoteStackAdd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-80v-600h600v400.33L680-80H280Zm60-60h308l172-172v-308H340v480Zm-164-53L71-784l591-105 26 149h-60l-14-79-473 83 79 450v85l-44 8Zm374-37h60v-120h120v-60H610v-120h-60v120H430v60h120v120Zm30-150Z",
    fill: "currentColor"
  }));
};
export default SvgNoteStackAdd;