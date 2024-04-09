import React from 'react';

interface AuthButtonProps {
    onClick: (e:  React.MouseEvent<HTMLButtonElement>) => void;
    type: "button" | "submit" | "reset";
    children: React.ReactNode;
}

const CustomButton: React.FC<AuthButtonProps> = ({ onClick, type, children }) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default CustomButton;