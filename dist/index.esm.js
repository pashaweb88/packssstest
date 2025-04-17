import { jsx } from 'react/jsx-runtime';

const Button = ({ children, onClick }) => {
    return (jsx("button", { onClick: onClick, style: { color: 'blue' }, children: children }));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
