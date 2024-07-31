function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScene = function SvgScene(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M820-80v-610q0-38-26-64t-64-26h-50v62q0 7.71-5.14 12.86Q669.71-700 662-700H438q-10 0-14.5-11t-.5-19l76-164q5-12 16.4-19 11.4-7 26.6-7h92q19.71 0 32.86 15Q680-890 680-870v30h50q63 0 106.5 43.5T880-690v610h-60ZM503-760h117v-100h-72l-45 100ZM190-80q-46.75 0-78.37-31.63Q80-143.25 80-190v-100q0-29 22-55.69 22-26.69 58-32.31v-102q0-24.75 17.63-42.38Q195.25-540 220-540h340q24.75 0 42.38 17.62Q620-504.75 620-480v102q36 5.6 58 30.8 22 25.2 22 57.2v100q0 46.75-31.62 78.37Q636.75-80 590-80H190Zm30-400v115q18 15 29 33.92 11 18.93 11 41.08v30h260v-30q0-22.15 11-41.08Q542-350 560-365v-115H220Zm-30 340h400q22.5 0 36.25-15.63Q640-171.25 640-190v-100q0-13.5-8.25-21.75T610-320q-13.5 0-21.75 8.25T580-290v90H200v-90q0-13.5-8.25-21.75T170-320q-13.5 0-21.75 8.25T140-290v100q0 18.75 13.75 34.37Q167.5-140 190-140Zm330-120H260h260ZM220-480h340-340Zm-20 340h380-380Z",
    fill: "currentColor"
  }));
};
export default SvgScene;