import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react"
import FormInputContainer from "./FormInputContainer/FormInputContainer";
import FormLabel from "./FormLabel/FormLabel";
import FormInput from "./FormInput/FormInput";
import FormButton from "./FormButton/FormButton";


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const {register} = useContext(AuthContext);

    const handleUpdate = (e) => {
        console.log(e);
        const targetField = e.target.name;
        setFormData(() => {
            const updatedFormData = {...formData};
            updatedFormData[targetField] = e.target.value;
            return updatedFormData;
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (!!formData.username && !!formData.email && !!formData.password) {
            console.log("attempting to register user...");
            register(formData.username, formData.password)
        } else {
            console.log("please enter a valid username, email, password");
        }
    }

    return (
        <div style={{maxWidth: "500px", margin: "0 auto"}}>
            <form onSubmit={handleRegister}>
                <FormInputContainer>
                        <FormLabel label="Username" />
                        <FormInput id="username" name="username" type="text" value={formData.username} handleUpdate={handleUpdate}/>
                    </FormInputContainer>
                    <FormInputContainer>
                        <FormLabel label="Password" />
                        <FormInput id="password" name="password" type="password" value={formData.password} handleUpdate={handleUpdate}/>
                    </FormInputContainer>
                    <FormInputContainer>
                        <FormLabel label="Email" />
                        <FormInput id="email" name="email" type="email" value={formData.email} handleUpdate={handleUpdate}/>
                    </FormInputContainer>
                    <FormButton text="Register"/>
            </form>
        </div>
    )
};

export default RegisterForm;