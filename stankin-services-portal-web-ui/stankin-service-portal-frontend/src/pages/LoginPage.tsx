import axios from 'axios';
import AuthInput from "../components/AuthInput.tsx";
import AuthButton from "../components/AuthButton.tsx";

const LoginPage = () => {

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
            <AuthInput
                    type="text"
                    placeholder="Введите логин"
                    name='login'
            />
            <AuthInput
                    type="password"
                    placeholder="Введите логин"
                    name='password'
            />
            <AuthButton type="submit" onClick={e => handleClickBtn(e)}>Войти</AuthButton>
        </form>
    );
};


export default LoginPage;