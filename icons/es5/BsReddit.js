function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgBsReddit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    className: "bs-reddit_svg__bi bs-reddit_svg__bi-reddit",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.167 8a.831.831 0 00-.83.83c0 .459.372.84.83.831a.831.831 0 000-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 000-.306.213.213 0 00-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 00-.306 0 .213.213 0 000 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 00-1.66 0z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8A8 8 0 110 8a8 8 0 0116 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 10.83-.869.83.83 0 00-.744.468l-1.938-.41a.203.203 0 00-.153.028.186.186 0 00-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 00-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z",
    fill: "currentColor"
  }));
}
export default SvgBsReddit;