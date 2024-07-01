function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgServiceToolbox = function SvgServiceToolbox(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M303-729v-111h352v111h105l120 285v284H80v-284l118-285h105Zm60 0h232v-51H363v51Zm-79 260v-46h60v46h272v-46h60v46h127l-83-200H240l-83 200h127Zm0 60H140v189h680v-189H676v46h-60v-46H344v46h-60v-46Zm196-30Zm0-30Zm0 60Z",
    fill: "currentColor"
  }));
};
export default SvgServiceToolbox;