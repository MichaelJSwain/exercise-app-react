import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import FormInput from "./FormInput/FormInput";
import FormLabel from "./FormLabel/FormLabel";
import FormInputContainer from "./FormInputContainer/FormInputContainer";
import FormFieldError from "../Error/FormFieldError";
import { AuthDrawerContext } from "../Context/AuthDrawerContext";
import Button from "../Buttons/PrimaryButton/Button";

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
    const [isServerError, setIsServerError] = useState(false);
    const [validatedUser, setValidatedUser] = useState(false);
    const {hideAuthDrawer} = useContext(AuthDrawerContext);

    const validateForm = () => {
        console.log("validating form...")
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
        const loginUser = async () => {
            if (isFormValid) {
                const result = await login(formData.username.value, formData.password.value);
                console.log("result = ", result);
                if (result === "400") {
                    setIsServerError(true);
                    setIsFormValid(false);
                } else {
                    setIsServerError(false);
                    hideAuthDrawer();
                }
            }
        }
        loginUser()
    }, [isFormValid]);

    return (
        <div>
            {isServerError && <p>Invalid username or password</p>}
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
                    <Button text="Login" clickFunc={() => {}} variant="primary"/>
            </form>
        </div>
    )
};

export default LoginForm;