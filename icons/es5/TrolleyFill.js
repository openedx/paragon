function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTrolleyFill = function SvgTrolleyFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-260v-520H80v-60h140v520h620v60H160Zm59.12 180Q194-80 177-97.68q-17-17.67-17-42.5 0-24.82 17-42.32t42.12-17.5q25.11 0 43 17.68Q280-164.65 280-139.82q0 24.82-17.88 42.32-17.89 17.5-43 17.5ZM290-390v-220h220v220H290Zm280 0v-220h220v220H570ZM779.82-80Q755-80 737.5-97.68q-17.5-17.67-17.5-42.5 0-24.82 17.68-42.32 17.67-17.5 42.5-17.5 24.82 0 42.32 17.68 17.5 17.67 17.5 42.5 0 24.82-17.68 42.32Q804.65-80 779.82-80Z",
    fill: "currentColor"
  }));
};
export default SvgTrolleyFill;