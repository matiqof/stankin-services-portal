import {FC, useEffect, useState} from 'react';
import CustomButton from "./CustomButton.tsx";
import Cookies from 'js-cookie';

interface CustomModalProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    titleButton: string;
}

const CustomModal: FC<CustomModalProps> = ({id, icon, title, description, titleButton}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(id == 'alertBeta') {
            const alertBeta = Cookies.get('alertBeta');
            if(!alertBeta) {
                setIsOpen(true);
            }
        }
        if(id == 'alertCookie') {
            const alertCookie = Cookies.get('alertCookie')
            if(!alertCookie) {
                setIsOpen(true);
            }
        }
    }, []);
    const onClose = () => {
        if (id == 'alertBeta') {
            // Куки запомнят данный алерт ровно сутки
            Cookies.set('alertBeta', 'true', {expires: 1});
            setIsOpen(!isOpen);
        }
        if (id == 'alertCookie') {
            // Куки запомнят данный алерт ровно 30 дней
            Cookies.set('alertCookie', 'true', {expires: 30});
            setIsOpen(!isOpen);
        }
    }
    return isOpen && (
        <>
            <div className="bg-stankin-overlay inset-0 hs-overlay fixed z-10 text-center overflow-y-auto flex justify-center items-center">
                <div className="bg-stankin-white py-8 rounded-2xl w-fit h-fit flex justify-center flex-col items-center">
                     <span
                         className="mb-6 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-alert-border-yellow bg-alert-bg-yellow text-stankin-white">
                    {icon}
                </span>
                    <h3 className="mb-4 text-2xl font-bold">
                        {title}
                    </h3>
                    <p className="mb-6 w-[55%]">
                        {description}
                    </p>
                    <CustomButton
                        styleButton="flex max-w-[150px] w-full justify-center rounded-md bg-stankin-blue px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-white shadow-sm transition-colors hover:bg-stankin-white hover:text-stankin-black hover:border-stankin-black border-solid border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                        type="button"
                        onClick={onClose}>{titleButton}
                    </CustomButton>
                </div>
            </div>
        </>
    );
};
export default CustomModal;