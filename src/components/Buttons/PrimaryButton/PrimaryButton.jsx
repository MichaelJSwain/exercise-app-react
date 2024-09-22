const PrimaryButton = ({text, clickFunc}) => {
    return (
        <button className="btn btn-primary w-100" onClick={clickFunc}>{text}</button>
    )
};

export default PrimaryButton;