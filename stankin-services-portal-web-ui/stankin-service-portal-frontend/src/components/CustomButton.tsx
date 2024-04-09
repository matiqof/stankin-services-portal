import React from 'react';

interface AuthButtonProps {
    onClick: (e:  React.MouseEvent<HTMLButtonElement>) => void;
    type: "button" | "submit" | "reset";
    children: React.ReactNode;
    styleButton: string;
}

const CustomButton: React.FC<AuthButtonProps> = ({ onClick, type, children, styleButton }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={styleButton}
        >
            {children}
        </button>
    );
};

export default CustomButton;