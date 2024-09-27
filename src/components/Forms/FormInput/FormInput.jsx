import "./FormInput.css";

const FormInput = ({id, name, value, type, handleUpdate}) => {
    return (
        <input className="formInput" id={id} name={name} value={value} type={type} onChange={handleUpdate}/>
    )
};

export default FormInput;