function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVentilator = function SvgVentilator(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M500-660h200v-120H500v120ZM160-260q25 0 42.5-17.5T220-320q0-25-17.5-42.5T160-380q-25 0-42.5 17.5T100-320q0 25 17.5 42.5T160-260Zm320 130q-73 0-139-22.5T221-217q-14 8-29 12.5t-32 4.5q-50 0-85-35t-35-85q0-26 10.5-48T78-407q-9-24-15.5-49T53-507l59-6q2 20 6.5 39.5T130-436q7-2 14.5-3t15.5-1q50 0 85 35t35 85q0 17-4 32t-12 29q40 29 87 46t99 22v-209q0-21-14.5-35.5T400-450q-63 0-106.5-43.5T250-600q0-63 43.5-106.5T400-750h40v-90h320v90h70v60h-70v90H440v-90h-40q-38 0-64 26t-26 64q0 38 26 64t64 26q46 0 78 32t32 78v209q96-8 173.5-60T805-384l-50-24 27-54 47 24q6-18 11-36.5t7-38.5l60 6q-3 25-9.5 49T883-411l42 20-27 54-39-20q-55 102-156 164.5T480-130Zm20-530v-120 120ZM160-320Z",
    fill: "currentColor"
  }));
};
export default SvgVentilator;