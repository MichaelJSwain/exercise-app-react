const FormInputContainer = ({children}) => {
    return (
        <div style={{display: "flex", flexDirection: "column", textAlign: "left", margin: "20px 0"}}>
            {children}
        </div>
    )
};

export default FormInputContainer;