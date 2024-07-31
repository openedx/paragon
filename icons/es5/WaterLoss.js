function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterLoss = function SvgWaterLoss(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M262-140h436l17-150h-18q-37 0-68-5.5T544-316q-25-7-49.5-10.5T444-330q-52 0-102 14.5T247-275l15 135Zm-22-200q47-24 99-37t105-13q30 0 59.5 4t56.5 12q51 14 78 19t58 5h25l52-470H187l53 480ZM208-80l-88-800h720L752-80H208Zm54-60h-15 468-453Z",
    fill: "currentColor"
  }));
};
export default SvgWaterLoss;