import React, {useState} from 'react';

interface CustomInputProps {
    type: string;
    placeholder: string;
    name: string;
}

const AuthInput: React.FC<CustomInputProps> = ({ type, placeholder, name }) => {
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
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={type == "login" ? login.login : password.password}
            onChange={type == "login" ? handleInputLogin : handleInputPassword}
        />
    );
};

export default AuthInput;