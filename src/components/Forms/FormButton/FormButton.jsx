import "./FormButton.css";

const FormButton = ({text}) => {
    return (
        <button className="btn btn-primary formButton">{text}</button>
    )
};

export default FormButton;