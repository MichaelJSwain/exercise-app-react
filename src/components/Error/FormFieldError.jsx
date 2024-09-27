import "./FormFieldError.css";

const FormFieldError = ({text}) => {
    return (
        <div className="error formFieldError">
            <span>{text}</span>
        </div>
    )
};

export default FormFieldError;