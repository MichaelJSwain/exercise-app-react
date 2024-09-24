import { useState } from "react"

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleUpdate = (e) => {
        console.log(e);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("attempting to register user...");
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