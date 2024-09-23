const SecondaryButton = ({text, clickFunc}) => {
    return (
        <button className="btn btn-secondary w-100" onClick={clickFunc}>{text}</button>
    )
};

export default SecondaryButton;