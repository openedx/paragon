function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRsvpFill = function SvgRsvpFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-360v-240h194v153h-38l35 87h-52l-34-86H88v86H40Zm246 0v-48h120v-48H286v-144h168v48H334v48h120v144H286Zm277.5 0L497-600h51l44 164 44-164h51l-66.5 240h-57Zm162.5 0v-240h194v154H774v86h-48ZM88-494h98v-58H88v58Zm686 0h98v-58h-98v58Z",
    fill: "currentColor"
  }));
};
export default SvgRsvpFill;