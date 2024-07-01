function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOutpatient = function SvgOutpatient(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-120v-720h560v720H371v-170H270v170H40Zm60-60h110v-170h221v170h109v-600H100v600Zm110-270h60v-60h-60v60Zm0-160h60v-60h-60v60Zm160 160h60v-60h-60v60Zm0-160h60v-60h-60v60Zm424 256-42-42 53-54H640v-60h165l-53-54 42-42 126 126-126 126ZM210-180v-170h221v170-170H210v170Z",
    fill: "currentColor"
  }));
};
export default SvgOutpatient;