import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    path: string;
}

const CustomModal: FC<CustomModalProps> = ({ isOpen, onClose, children, path }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== path && isOpen) {
            onClose();
        }
    }, [location, isOpen, onClose]);

    return (
        <>
            {isOpen && (
               children
            )}
        </>
    );
};

export default CustomModal;