const Button = ({
    buttonClass,
    label,
    style,
    onClick,
    type,
}) => {
    return (
        <button
            className={`buttonClass ${buttonClass}`}
            style={style}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    )
};

export default Button;