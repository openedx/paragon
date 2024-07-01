function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStickyNote = function SvgStickyNote(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M639-120H120v-720h720v519L639-120Zm-30-60v-171.43h171V-780H180v600h429ZM450-321h60v-258h129v-60H321v60h129v258Zm159 141Zm-429 0v-600 600Z",
    fill: "currentColor"
  }));
};
export default SvgStickyNote;