import React from "react";
import CustomButton from "./UI/CustomButton.tsx";

interface CertificateProps {
    title: string,
    fullName: string,
    group: string,
    imgSrc: string
}
const Certificate: React.FC<CertificateProps> = ({ title, fullName, group, imgSrc }) => {
    const handleClickBtn = () => {
    }

    return (
        <>
            <h2 className="text-2xl font-medium">{title} <span className="block">{fullName} {group}</span></h2>
            <div className='max-w-[400px]'>
                <img className='w-full h-full object-cover' src={imgSrc} alt={title}/>
            </div>
            <CustomButton
                styleButton="flex w-full max-w-[200px] justify-center rounded-md bg-stankin-red px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-white shadow-sm transition-colors hover:bg-stankin-white hover:text-stankin-black hover:border-stankin-red border-solid border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                type="button"
                onClick={handleClickBtn}>
                Скачать
            </CustomButton>
        </>
    );
};

export default Certificate;