import Error404 from  '../assets/404.svg';
import CustomButton from "../components/UI/CustomButton.tsx";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/");
    }

    return (
        <div className='max-w-[600px] mx-auto py-[90px] px-5'>
            <div className='flex flex-col items-center'>
                <h2 className='text-5xl font-semibold mb-3'>Страница не&nbsp;найдена</h2>
                <p className='max-w-[440px] text-center text-stankin-gray text-[18px] mb-5'>Возможно, она была перемещена,
                    или
                    вы&nbsp;просто неверно указали адрес страницы.</p>
            </div>
            <CustomButton type='button'
                          onClick={handleButtonClick}
                          styleButton="max-w-[150px] mx-auto flex w-full justify-center rounded-md bg-stankin-red px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-white shadow-sm transition-colors hover:bg-stankin-white hover:text-stankin-black hover:border-stankin-red border-solid border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
            >
                На главную
            </CustomButton>
            <img className='w-full h-[400px]' src={Error404} alt="Страница не найдена"/>
        </div>
    )
}

export default NotFoundPage;