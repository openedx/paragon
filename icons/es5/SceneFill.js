function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSceneFill = function SvgSceneFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M820-80v-610q0-38-26-64t-64-26h-50v62q0 7.71-5.14 12.86Q669.71-700 662-700H438q-10 0-14.5-11t-.5-19l76-164q5-12 16.4-19 11.4-7 26.6-7h92q19.71 0 32.86 15Q680-890 680-870v30h50q63 0 106.5 43.5T880-690v610h-60Zm-630 0q-46.75 0-78.37-31.63Q80-143.25 80-190v-98q0-25 17.5-42.5T140-348q25 0 42.5 17.5T200-288v88h380v-90q0-25 17.5-42.5T640-350q25 0 42.5 17.5T700-290v100q0 46.75-31.62 78.37Q636.75-80 590-80H190Zm40-150v-60q0-32-16-56t-54-32v-102q0-24.75 17.63-42.38Q195.25-540 220-540h340q24.75 0 42.38 17.62Q620-504.75 620-480v102q-38 8-54 32t-16 56v60H230Z",
    fill: "currentColor"
  }));
};
export default SvgSceneFill;