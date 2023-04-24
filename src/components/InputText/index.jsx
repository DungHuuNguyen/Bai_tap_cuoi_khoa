import { Controller } from "react-hook-form";

const InputText = ({
    inputClass,
    label,
    placeholder,
    value,
    onChange,
    control,
    name
}) => {
    return (
        <div className={`inputText ${inputClass}`}>
            <label htmlFor={name}>{label}</label>
            <Controller
                control={control}
                name={name}
                render={({ field /*: { onChange, value }*/ }) => {
                    return <input
                        placeholder={placeholder}
                        // onChange={onChange}
                        // value={value}
                        {...field}
                    />
                }}
            />
            {/* Điều khiển ô input => biến ô input thành controller cpn */}
        </div>
    );
};

export default InputText;