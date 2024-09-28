import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect, useState } from "react"
import FormInputContainer from "./FormInputContainer/FormInputContainer";
import FormLabel from "./FormLabel/FormLabel";
import FormInput from "./FormInput/FormInput";
import FormButton from "./FormButton/FormButton";
import FormFieldError from "../Error/FormFieldError";
import { AuthDrawerContext } from "../Context/AuthDrawerContext";


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: {
            value: "",
            isError: false,
            errorMessage: "Please enter a valid username"
        },
        email: {
            value: "",
            isError: false,
            errorMessage: "Please enter a valid email"
        },
        password: {
            value: "",
            isError: false,
            errorMessage: "Please enter a valid password"
        }
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isServerError, setIsServerError] = useState(false);
    const {hideAuthDrawer} = useContext(AuthDrawerContext);

    const {register} = useContext(AuthContext);

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
        if (!formData.email.value) {
            result.email.isError = true;
            validForm = false;
        } else {
            result.email.isError = false;
        }
        setFormData(result);
        setIsFormValid(validForm);
    };

    const handleUpdate = (e) => {
        console.log(e);
        const targetField = e.target.name;
        setFormData(() => {
            const updatedFormData = {...formData};
            updatedFormData[targetField].value = e.target.value;
            return updatedFormData;
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        validateForm();
    }

    useEffect(() => {
        if (isFormValid) {
            register(formData.username.value, formData.password.value);
        }

        const registerUser = async () => {
            if (isFormValid) {
                const result = await register(formData.username.value, formData.password.value);
                console.log("result = ", result);
                if (result === "400") {
                    setIsServerError(true);
                } else {
                    hideAuthDrawer();
                }
            }
        }
        registerUser();
    }, [isFormValid]);

    return (
        <div style={{maxWidth: "500px", margin: "0 auto"}}>
            {isServerError && <p>Sorry, unable to register. Please try again later.</p>}
            <form onSubmit={handleRegister}>
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
                    <FormInputContainer>
                        <FormLabel label="Email" />
                        <FormInput id="email" name="email" type="email" value={formData.email.value} handleUpdate={handleUpdate}/>
                        {formData.email.isError && <FormFieldError text={formData.email.errorMessage}/>}
                    </FormInputContainer>
                    <FormButton text="Register"/>
            </form>
        </div>
    )
};

export default RegisterForm;