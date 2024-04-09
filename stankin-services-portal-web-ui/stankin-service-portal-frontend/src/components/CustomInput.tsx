
interface CustomInputProps {
    type: string;
    placeholder: string;
    name: string;
    eventHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    styleInput: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, placeholder, name, eventHandler, styleInput }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={eventHandler}
            className={styleInput}
        />
    );
};

export default CustomInput;