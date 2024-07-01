function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgShieldWithHouse = function SvgShieldWithHouse(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-511L236-402q22 72 67.5 130.5T410-176v-174h140v174q61-37 106.5-95.5T724-402L480-592Zm0-225-260 98v196q0 13 1 28t3 28l256-200 256 200q2-13 3-28t1-28v-196l-260-98Z",
    fill: "currentColor"
  }));
};
export default SvgShieldWithHouse;