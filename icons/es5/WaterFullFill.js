function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterFullFill = function SvgWaterFullFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M211-603q51-32 111.5-49T444-670q30 0 59.5 4t56.5 12q51 14 78 19t58 5h56l21-190H187l24 217Zm-3 523-88-800h720L752-80H208Z",
    fill: "currentColor"
  }));
};
export default SvgWaterFullFill;