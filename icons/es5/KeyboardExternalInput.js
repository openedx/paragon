function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgKeyboardExternalInput = function SvgKeyboardExternalInput(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M140-260v-440 440Zm-60 60v-560h800v327q-14-10-28.6-18.16-14.61-8.16-31.4-13.84v-235H140v440h346q-1 8-1 14.95V-215q0 7 1 15H80Zm220-185v60h203q7-17 16-31.5t20-28.5H300Zm-97-125v60h60v-60h-60Zm124 0v60h60v-60h-60Zm123 0v60h60v-60h-60Zm124 0v60h42q5-2 9.22-4.53 4.23-2.53 8.78-4.47v-51h-60Zm123 0v33q9-2 17.87-2.5 8.86-.5 19.13-.5h12q6 0 11 1v-31h-60ZM203-635v60h60v-60h-60Zm124 0v60h60v-60h-60Zm123 0v60h60v-60h-60Zm124 0v60h60v-60h-60Zm123 0v60h60v-60h-60Zm37 551-42-42 73-74H584v-60h181l-73-74 42-42 146 146L734-84Z",
    fill: "currentColor"
  }));
};
export default SvgKeyboardExternalInput;