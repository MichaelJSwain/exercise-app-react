const Button = ({variant, text, clickFunc}) => {
    return (
        <button className={`btn w-100 btn-${variant}`} onClick={clickFunc}>{text}</button>
    )
};

export default Button;