import { FC, ReactNode } from 'react';

interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
}
declare const Button: FC<ButtonProps>;

export { Button };
