import { FC, ReactNode } from 'react';
interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
}
export declare const Button: FC<ButtonProps>;
export default Button;
