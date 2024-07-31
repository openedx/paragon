function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStackedInbox = function SvgStackedInbox(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M150-240v-600h780v600H150Zm60-214v154h660v-154H680q-19 45-55.5 71.5T540-356q-48 0-84.5-26.5T400-454H210Zm330 38q38 0 67-30t29-68h234v-266H210v266h234q0 38 29 68t67 30Zm199 296H30v-529h60v469h649v60ZM210-300h660-660Z",
    fill: "currentColor"
  }));
};
export default SvgStackedInbox;