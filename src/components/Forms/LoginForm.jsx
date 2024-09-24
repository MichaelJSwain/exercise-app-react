import { useState } from "react"
import axios from "axios";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

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
            axios.post("http://localhost:8080/exerciseApp/api/user/login", formData)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log("error attempting to login = ", e);
            })
        } else {
            console.log("please enter a valid email or password");
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" name="username" value={formData.username} onChange={handleUpdate}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" value={formData.password} onChange={handleUpdate}/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
};

export default LoginForm;