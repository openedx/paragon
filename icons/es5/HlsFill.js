function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHlsFill = function SvgHlsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-360v-240h48v89h98v-89h48v240h-48v-103h-98v103h-48Zm276 0v-240h48v192h120v48H396Zm224 0v-80h48v32h104v-53H620v-139h200v80h-48v-32H668v53h152v139H620Z",
    fill: "currentColor"
  }));
};
export default SvgHlsFill;