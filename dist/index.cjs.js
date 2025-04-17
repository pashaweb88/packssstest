'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Button = ({ children, onClick }) => {
    return (jsxRuntime.jsx("button", { onClick: onClick, style: { color: 'blue' }, children: children }));
};

exports.Button = Button;
//# sourceMappingURL=index.cjs.js.map
