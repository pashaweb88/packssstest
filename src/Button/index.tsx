import {FC, ReactNode} from 'react';

interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} style={{color: 'blue'}}>{children}</button>
    );
};

export default Button;
