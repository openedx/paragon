function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgIndeterminateQuestionBox = function SvgIndeterminateQuestionBox(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-120q-24 0-42-18t-18-42v-172h60v172h172v60H180Zm600 0H608v-60h172v-172h60v172q0 24-18 42t-42 18ZM120-780q0-24 18-42t42-18h172v60H180v172h-60v-172Zm720 0v172h-60v-172H608v-60h172q24 0 42 18t18 42ZM477.03-245Q493-245 504-256.03q11-11.03 11-27T503.97-310q-11.03-11-27-11T450-309.97q-11 11.03-11 27T450.03-256q11.03 11 27 11ZM444-393h57q0-29 9.5-49t35.5-46q32-32 45.5-57.5t13.5-54.07Q605-651 569.39-683q-35.61-32-90.39-32-50 0-87 23.5T338-623l53 22q14-26 37-41.5t51.02-15.5q31.26 0 50.12 17Q548-624 548-598q0 20-11 38.5T500-516q-33 32-44.5 56.5T444-393Z",
    fill: "currentColor"
  }));
};
export default SvgIndeterminateQuestionBox;