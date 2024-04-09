
interface CustomInputProps {
    type: string;
    placeholder: string;
    name: string;
    eventHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, placeholder, name, eventHandler }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={eventHandler}
        />
    );
};

export default CustomInput;