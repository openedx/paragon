function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCycle = function SvgCycle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M352-100q-119-40-195.5-143T80-480q0-32 4.5-64t15.5-63l-64 37-30-51 173-100 100 172-52 30-58-99q-14 33-21.5 67.5T140-480q0 116 68.5 205.5T383-153l-31 53Zm288-520v-60h115q-48-66-120.5-103T480-820q-69 0-128.5 25T246-726l-31-54q54-47 121.5-73.5T480-880q88 0 165.5 35.5T780-744v-76h60v200H640ZM595 0 422-100l100-172 51 30-58 101q130-13 217.5-110T820-480q0-21-2.5-40.5T810-560h62q4 20 6 40t2 40q0 143-89.5 253T562-88l63 37-30 51Z",
    fill: "currentColor"
  }));
};
export default SvgCycle;