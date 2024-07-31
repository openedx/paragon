function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHeat = function SvgHeat(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M464-317q0 42 18.5 80.5T545-149l-46 39q-51-53-73.5-101.5T403-315q0-35 10.5-75T453-501q25-57 34.5-90.5T497-653q0-38-20-73.5T409-809l42-43q57 54 81.5 100t24.5 98q0 34-10.5 73T509-478q-26 61-35.5 96t-9.5 65Zm203 1q0 42 18.5 80.5T748-148l-46 39q-51-53-73.5-101.5T606-314q0-35 10.5-75T656-500q25-57 34.5-90.5T700-652q0-38-20-73.5T612-808l42-43q57 54 81.5 100t24.5 98q0 34-10.5 73T712-477q-26 61-35.5 96t-9.5 65Zm-406 0q0 42 18.5 81t62.5 88l-46 38q-51-53-73.5-101.5T200-314q0-35 10.5-75T250-500q25-57 34.5-90.5T294-652q0-38-20-73.5T206-808l42-43q57 54 81.5 100t24.5 98q0 34-10.5 73T306-477q-26 61-35.5 96t-9.5 65Z",
    fill: "currentColor"
  }));
};
export default SvgHeat;