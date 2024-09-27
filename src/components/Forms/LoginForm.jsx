import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import FormInput from "./FormInput/FormInput";
import FormLabel from "./FormLabel/FormLabel";
import FormInputContainer from "./FormInputContainer/FormInputContainer";
import FormButton from "./FormButton/FormButton";
import FormFieldError from "../Error/FormFieldError";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: {
            value: "",
            isError: false,
            errorMessage: "Please enter a username"
        },
        password: {
            value: "",
            isError: false,
            errorMessage: "Please enter a password"
        }
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        let result = {...formData};
        let validForm = true;
        if (!formData.username.value) {
            result.username.isError = true;
            validForm = false;
        } else {
            result.username.isError = false;
        }
        if (!formData.password.value) {
            result.password.isError = true;
            validForm = false;
        } else {
            result.password.isError = false;
        }
        setFormData(result);
        setIsFormValid(validForm);
    };

    const {login} = useContext(AuthContext);

    const handleUpdate = (e) => {
        const targetField = e.target.name;
        setFormData(() => {
            const updatedFormData = {...formData};
            updatedFormData[targetField].value = e.target.value;
            return updatedFormData;
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        validateForm();
    }

    useEffect(() => {
        if (isFormValid) {
            login(formData.username.value, formData.password.value);
        }
    }, [isFormValid]);

    return (
        <div style={{maxWidth: "500px", margin: "0 auto"}}>
            <form onSubmit={handleLogin}>
                <FormInputContainer>
                    <FormLabel label="Username" />
                    <FormInput id="username" name="username" type="text" value={formData.username.value} handleUpdate={handleUpdate}/>
                    {formData.username.isError && <FormFieldError text={formData.username.errorMessage}/>}
                    
                </FormInputContainer>
                <FormInputContainer>
                    <FormLabel label="Password" />
                    <FormInput id="password" name="password" type="password" value={formData.password.value} handleUpdate={handleUpdate}/>
                    {formData.password.isError && <FormFieldError text={formData.password.errorMessage}/>}
                </FormInputContainer>
                <FormButton text="Login"/>
            </form>
        </div>
    )
};

export default LoginForm;