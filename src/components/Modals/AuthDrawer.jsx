import { useContext } from "react";
import LoginForm from "../Forms/LoginForm";
import { AuthDrawerContext } from "../Context/AuthDrawerContext";
import RegisterForm from "../Forms/RegisterForm";

const AuthDrawer = () => {
    const {hideAuthDrawer, authDrawerDefaultForm, setForm} = useContext(AuthDrawerContext);
    console.log("form = ", authDrawerDefaultForm)
    return (
        <div style={{maxHeight: "none", height: "100%", background: "white", padding: "20px", position: "fixed", right: "0", width: "500px"}}>
            <button onClick={() => {hideAuthDrawer()}}>X</button>
            {authDrawerDefaultForm == 0 ? <LoginForm/> : (<RegisterForm />)}
            {authDrawerDefaultForm == 0 ? 
                <button onClick={() => {setForm(1)}}>Register</button> :
                <button onClick={() => {setForm(0)}}>Login</button>
            }
            
        </div>
    )
};

export default AuthDrawer;