import React from 'react';

interface AuthButtonProps {
    onClick: () => void;
    type: "button" | "submit" | "reset";
}

const AuthButton: React.FC<AuthButtonProps> = ({ onClick, type, children }) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default AuthButton;