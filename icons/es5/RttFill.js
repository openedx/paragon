function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRttFill = function SvgRttFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m375-120 13-82h93l89-556H439l-33 200h-85l46-282h518l-46 282h-85l32-200H655l-89 556h93l-13 82H375ZM154-700l10-60h129l-10 60H154Zm-26 165 10-60h129l-10 60H128ZM75-205l10-60h229l-9 60H75Zm27-165 10-60h229l-10 60H102Z",
    fill: "currentColor"
  }));
};
export default SvgRttFill;