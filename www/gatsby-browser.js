const React = require("react");
const { ParagonProvider } = require("~paragon-react");

exports.wrapRootElement = ({ element }) => <ParagonProvider>{element}</ParagonProvider>;
