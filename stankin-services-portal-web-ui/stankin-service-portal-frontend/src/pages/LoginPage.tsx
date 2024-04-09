import axios from 'axios';
import CustomInput from "../components/CustomInput.tsx";
import CustomButton from '../components/CustomButton.tsx';
import React, {useState} from "react";

const LoginPage = () => {

    const [login, setLogin] = useState({login : ''});
    const [password, setPassword] = useState({password: ''});

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
        <form>
            <CustomInput
                    type="text"
                    placeholder="Введите логин"
                    name='login'
                    eventHandler={e => handleInputLogin(e)}
            />
            <CustomInput
                    type="password"
                    placeholder="Введите логин"
                    name='password'
                    eventHandler={e => handleInputPassword(e)}
            />
            <CustomButton type="submit" onClick={e => handleClickBtn(e)}>Войти</CustomButton>
        </form>
    );
};


export default LoginPage;