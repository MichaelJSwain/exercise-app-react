import "./FormInputContainer.css";

const FormInputContainer = ({children}) => {
    return (
        <div className="formInputContainer">
            {children}
        </div>
    )
};

export default FormInputContainer;