function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCalendarClockFill = function SvgCalendarClockFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-80v-740h125v-60h65v60h340v-60h65v60h125v367q-14.17-7.29-29.08-12.14Q796-470 780-473v-97H180v430h319q6 17 14 31.5T532-80H120Zm611 40q-78.43 0-133.72-55.28Q542-150.57 542-229t55.28-133.72Q652.57-418 731-418t133.72 55.28Q920-307.43 920-229T864.72-95.28Q809.43-40 731-40Zm58.24-88L817-156l-75-75v-112h-39v126l86.24 89Z",
    fill: "currentColor"
  }));
};
export default SvgCalendarClockFill;