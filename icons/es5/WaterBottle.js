function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterBottle = function SvgWaterBottle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M375-140h250l32-345q-12-8-20.5-19.5T623-530H377q-5 14-13.5 25.5T343-485l32 345Zm-9-560-17 69q9 8 16 18.5t11 22.5h249q4-11 10.5-21.5T651-630l-17-70H366ZM320-80l-40-440 19-10q8-5 14-12t6-17q0-9-4-17t-12-12l-23-12 40-160h150v-60h-60v-60h180v60h-60v60h150l39 158-23 12q-8 4-12 12t-4 17q0 10 6 17.5t14 12.5l19 9-39 442H320Zm180-450Zm0-60Z",
    fill: "currentColor"
  }));
};
export default SvgWaterBottle;