import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react"
import FormInputContainer from "./FormInputContainer";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormButton from "./FormButton";


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
                {/* <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" name="username" value={formData.username} onChange={handleUpdate}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" value={formData.email} onChange={handleUpdate}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" value={formData.password} onChange={handleUpdate}/>
                </div>
                <button>Register</button> */}
            </form>
        </div>
    )
};

export default RegisterForm;