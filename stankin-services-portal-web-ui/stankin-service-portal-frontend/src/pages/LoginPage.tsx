import axios from 'axios';
import CustomInput from "../components/CustomInput.tsx";
import CustomButton from '../components/CustomButton.tsx';
import React, {useState} from "react";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const [login, setLogin] = useState({login : ''});
    const [password, setPassword] = useState({password: ''});

    const styleButton = "flex w-full justify-center rounded-md bg-stankin-red px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
    const styleInput= "block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-stankin-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
    const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        //console.log(e.target);
        setLogin((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        //console.log(e.target);
        setPassword((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };
    console.log(login);
    console.log(password);

    async function checkUser() {
        try {
            const req = await axios.post(``, {
                login: login,
                password: password
            });
            console.log(req.data);
        }
        catch(e) {
            console.log((e as Error).message);
        }
    }

    const handleClickBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await checkUser();
    }
    return (
        // <div className={"space-y-6"}>
        //     <CustomInput
        //             type="text"
        //             placeholder="Введите логин"
        //             name='login'
        //             eventHandler={e => handleInputLogin(e)}
        //             styleInput={styleInput}
        //     />
        //     <CustomInput
        //             type="password"
        //             placeholder="Введите пароль"
        //             name='password'
        //             eventHandler={e => handleInputPassword(e)}
        //             styleInput={styleInput}
        //     />
        //     <CustomButton
        //         type="submit"
        //         onClick={e => handleClickBtn(e)}
        //         styleButton = {styleButton}
        //     >Войти</CustomButton>
        // </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-20 w-auto"
                    src="https://stankin.ru/uploads/files/file_63c65df88e865.svg"
                    alt="Stankin logo"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Добро пожаловать !
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Логин
                        </label>
                        <div className="mt-2">
                            <CustomInput
                                type="text"
                                placeholder="Введите логин"
                                name='login'
                                eventHandler={e => handleInputLogin(e)}
                                styleInput="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Пароль
                            </label>
                            <div className="text-sm">
                                <Link to="/forgotPass" className="font-semibold text-stankin-black hover:text-stankin-blue"> {/*TODO*/}
                                    Забыли пароль ?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <CustomInput
                                type="password"
                                placeholder="Введите пароль"
                                name='password'
                                eventHandler={e => handleInputPassword(e)}
                                styleInput="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <CustomButton
                            type="submit"
                            onClick={e => handleClickBtn(e)}
                            styleButton="flex w-full justify-center rounded-md bg-stankin-red px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-white shadow-sm transition-colors hover:bg-stankin-white hover:text-stankin-black hover:border-stankin-red border-solid border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                        >
                            Авторизация
                        </CustomButton>
                    </div>
                </form>

                <p className="mt-10 text-center">
                    У вас нет аккаунта?{" "}
                    <Link to="/reg" className="font-semibold leading-6 transition-all text-sm hover:underline"> {/*TODO*/}
                        Зарегистрироваться
                    </Link>
                </p>
            </div>
        </div>
    );
};


export default LoginPage;