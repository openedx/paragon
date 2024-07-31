function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPace = function SvgPace(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 29-4 58t-12 56q-11-11-24.5-19T810-397q5-20 7.5-40.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140q58 0 110-18.5t95-50.5q10 12 22 22t26 16q-52 43-116.5 67T480-80Zm300-161q-17 0-28.5-11.5T740-281q0-17 11.5-28.5T780-321q17 0 28.5 11.5T820-281q0 17-11.5 28.5T780-241Zm-153-46L453-468v-225h60v201l159 160-45 45Z",
    fill: "currentColor"
  }));
};
export default SvgPace;