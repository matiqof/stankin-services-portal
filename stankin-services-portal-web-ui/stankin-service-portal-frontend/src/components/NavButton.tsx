import React from 'react';
import {useNavigate} from "react-router-dom";

interface NavButtonProps {
    type: "button" | "submit" | "reset";
    children: React.ReactNode;
    styleButton: string;
    goTo: string
}

const NavButton: React.FC<NavButtonProps> = ({ type, children, styleButton, goTo }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(goTo);
    };
    return (
        <button
            type={type}
            className={styleButton}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default NavButton;