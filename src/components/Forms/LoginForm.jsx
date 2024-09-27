import { useContext, useState } from "react"
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import FormInputContainer from "./FormInputContainer";
import FormButton from "./FormButton";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const {login} = useContext(AuthContext);

    const handleUpdate = (e) => {
        const targetField = e.target.name;
        setFormData(() => {
            const updatedFormData = {...formData};
            updatedFormData[targetField] = e.target.value;
            return updatedFormData;
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("attempting to log user in...");

        if (!!formData.username && !!formData.password) {
            login(formData.username, formData.password);
        } else {
            console.log("please enter a valid email or password");
        }
    }

    return (
        <div style={{maxWidth: "500px", margin: "0 auto"}}>
            <form onSubmit={handleLogin}>
                <FormInputContainer>
                    <FormLabel label="Username" />
                    <FormInput id="username" name="username" type="text" value={formData.username} handleUpdate={handleUpdate}/>
                </FormInputContainer>
                <FormInputContainer>
                    <FormLabel label="Password" />
                    <FormInput id="password" name="password" type="password" value={formData.password} handleUpdate={handleUpdate}/>
                </FormInputContainer>
                <FormButton text="Login"/>
            </form>
        </div>
    )
};

export default LoginForm;