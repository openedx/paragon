function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSimCardFill = function SvgSimCardFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M274-193h60v-60h-60v60Zm0-156h60v-166h-60v166Zm174 156h60v-170h-60v170Zm0-262h60v-60h-60v60Zm182 262h60v-60h-60v60Zm0-156h60v-166h-60v166ZM160-80v-561l239-239h401v800H160Z",
    fill: "currentColor"
  }));
};
export default SvgSimCardFill;