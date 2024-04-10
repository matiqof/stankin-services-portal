import {useState} from 'react';
import CustomModal from "../components/UI/CustomModal.tsx";
import {Link} from "react-router-dom";
import CustomButton from "../components/UI/CustomButton.tsx";

function ServicePage() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} path="/service">
                <div>
                    {isModalOpen && (
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div
                                className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                    <div className="absolute inset-0 bg-gray-500"></div>
                                </div>
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                      aria-hidden="true">&#8203;</span>
                                <div
                                    className="bg-stankin-white inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 z-20">
                                        <div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <div className='flex justify-between items-center mb-5'>
                                                    <h3 className='text-xl text-stankin-black font-semibold'>Выберите
                                                        нужные справки</h3>
                                                    <Link className='text-3xl' to='/'>
                                                        <span className="close" onClick={handleCloseModal}>&times;</span>
                                                    </Link>
                                                </div>
                                                <div className='flex flex-col gap-2 mb-7'>
                                                    <div className="flex items-center">
                                                            <input type="checkbox"
                                                                   className="shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                                   id="education"/>
                                                            <label htmlFor="education"
                                                                   className="ms-3">
                                                                Справка об обучении
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center">
                                                            <input type="checkbox"
                                                                   className="shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                                   id="enlistment-office"/>
                                                            <label htmlFor="enlistment-office"
                                                                   className="ms-3">
                                                                Справка для военкомата
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center">
                                                            <input type="checkbox"
                                                                   className="shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                                   id="academic-performance"/>
                                                            <label htmlFor="academic-performance"
                                                                   className="ms-3">
                                                                Справка об успеваемости
                                                            </label>
                                                        </div>
                                                </div>
                                                <div className="flex gap-3 justify-end">
                                                    <div className="flex items-center max-w-[200px]">
                                                        <input type="checkbox"
                                                               className="w-[22px] h-[22px] shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                               id="academic-performance"/>
                                                        <label htmlFor="academic-performance"
                                                               className="ms-3 font-semibold text-xs">
                                                            Я согласен на обработку персональных данных
                                                        </label>
                                                    </div>
                                                    <CustomButton
                                                        styleButton="flex max-w-[150px] w-full justify-center rounded-md bg-stankin-red px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-white shadow-sm transition-colors hover:bg-stankin-white hover:text-stankin-black hover:border-stankin-red border-solid border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                                                        type="button"
                                                        onClick={()=> {}}>Далее</CustomButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </CustomModal>
        </>
    );
}


export default ServicePage;