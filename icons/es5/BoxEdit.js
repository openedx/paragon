function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBoxEdit = function SvgBoxEdit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M197-734h565l-36-46H233l-36 46Zm183 305 100-50 100 50v-245H380v245ZM120-120v-609l82-111h555l83 111v123l-60 59v-127H640v267l-51 50-109-55-160 80v-342H180v494h320v60H120Zm520-554h140-140Zm-460 0h409-409Zm380 554v-123l263-262 122 122-262 263H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z",
    fill: "currentColor"
  }));
};
export default SvgBoxEdit;