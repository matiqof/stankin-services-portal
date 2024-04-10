import {useState} from 'react';
import CustomModal from "../components/UI/CustomModal.tsx";
import {Link} from "react-router-dom";

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
                                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                      aria-hidden="true">&#8203;</span>
                                <div
                                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <Link to='/'>
                                            <span className="close" onClick={handleCloseModal}>&times;</span>
                                        </Link>
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet consequuntur dolorem ducimus explicabo ipsa perferendis recusandae, rem repudiandae similique. Dolor mollitia nesciunt nulla quas reiciendis. Dignissimos expedita iure quas?
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