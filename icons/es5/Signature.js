function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSignature = function SvgSignature(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M546-463q85-58 133.5-128T728-732q0-42-14-65t-38-23q-57 0-97 85t-40 200q0 20 1.5 38t5.5 34ZM120-120v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60ZM122-284l-42-42 64-64-64-64 42-42 64 64 64-64 42 42-64 64 64 64-42 42-64-64-64 64Zm496-36q-32 0-57.5-14T517-375q-25 14-51.5 26.5T410-325l-21-56q28-11 53.5-22.5T492-429q-7-23-10-49.5t-3-56.5q0-146 55.5-245.5T676-880q51 0 81.5 41T788-729q0 88-57.5 172T570-406q10 13 22 19.5t26 6.5q35 0 71.5-30t68.5-86l55 26q-5 26-5.5 46t2.5 46q14-7 29.5-18.5T869-425l48 37q-25 31-55 49.5T806-320q-24 0-39-17t-18-49q-29 32-62.5 49T618-320Z",
    fill: "currentColor"
  }));
};
export default SvgSignature;