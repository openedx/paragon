function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterFull = function SvgWaterFull(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M444-610q-60 0-119 19.5T218-536l44 396h436l47-430h-48q-37 0-68-5.5T544-596q-25-7-49.5-10.5T444-610Zm-233 7q51-32 111.5-49T444-670q30 0 59.5 4t56.5 12q51 14 78 19t58 5h56l21-190H187l24 217Zm-3 523-88-800h720L752-80H208Zm236-60h254-436 182Z",
    fill: "currentColor"
  }));
};
export default SvgWaterFull;