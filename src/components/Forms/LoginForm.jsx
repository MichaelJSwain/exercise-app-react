import { useState } from "react"

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleUpdate = (e) => {
        console.log(e);
    };
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("attempting to log user in...");
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