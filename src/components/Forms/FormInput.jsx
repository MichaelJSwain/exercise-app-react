const FormInput = ({id, name, value, type, handleUpdate}) => {
    return (
        <input style={{
            height: "40px",
            padding: "10px",
            borderRadius: "3px",
            border: "1px solid black"
        }} id={id} name={name} value={value} type={type} onChange={handleUpdate}/>
    )
};

export default FormInput;