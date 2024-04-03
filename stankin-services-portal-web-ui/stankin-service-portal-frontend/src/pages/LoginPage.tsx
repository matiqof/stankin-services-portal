import {useState} from "react";
import axios from 'axios';

const LoginPage = () => {
    const [login, setLogin] = useState({login : ''});
    const [password, setPassword] = useState({password: ''});

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

    const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

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

    const handleClickBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await checkUser();
    }
    console.log(login);
    console.log(password);
    return (
        <form>
            <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <input placeholder='Введите логин' name='login' onChange={e => handleInputLogin(e)}></input>
                <input placeholder='Введите пароль' name='password' onChange={e => handleInputPassword(e)}></input>
                <button type='submit' onClick={e => handleClickBtn(e)}>Войти</button>
            </div>
        </form>
    );
};


export default LoginPage;