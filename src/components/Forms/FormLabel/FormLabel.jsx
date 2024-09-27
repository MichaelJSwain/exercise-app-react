import "./FormLabel.css";

const FormLabel = ({label}) => {
    return (
        <label className="formLabel" htmlFor="password">{label}:</label>
    )
};

export default FormLabel;