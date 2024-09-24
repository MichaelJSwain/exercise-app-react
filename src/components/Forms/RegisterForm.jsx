import axios from "axios";
import { useState } from "react"

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

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
            const newUser = {
                username: formData.username,
                password: formData.password
            }
            axios.post("http://localhost:8080/exerciseApp/api/user/register", newUser)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log("error attempting to register user = ", e);
                });
        } else {
            console.log("please enter a valid username, email, password");
        }
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <div>
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
                <button>Register</button>
            </form>
        </div>
    )
};

export default RegisterForm;