function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEditRoadFill = function SvgEditRoadFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M660-468v-332h60v272l-60 60ZM160-160v-640h60v640h-60Zm250-484v-156h60v156h-60Zm0 242v-156h60v156h-60Zm0 242v-156h60v156h-60Zm150 0v-123l263-262 122 122-262 263H560Zm263-224 37-39-37-37-38 38 38 38Z",
    fill: "currentColor"
  }));
};
export default SvgEditRoadFill;