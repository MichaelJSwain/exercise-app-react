import { useContext } from "react";
import LoginForm from "../Forms/LoginForm";
import { AuthDrawerContext } from "../Context/AuthDrawerContext";
import RegisterForm from "../Forms/RegisterForm";
import SecondaryButton from "../Buttons/PrimaryButton/SecondaryButton";
import CloseButton from "../Buttons/PrimaryButton/CloseButton";

const AuthDrawer = () => {
    const {hideAuthDrawer, authDrawerDefaultForm, setForm} = useContext(AuthDrawerContext);
    console.log("form = ", authDrawerDefaultForm)
    return (
        <div style={{maxHeight: "none", height: "100%", background: "white", padding: "20px", position: "fixed", width: "500px"}}>
            <div className="authDrawer_header" style={{display: "flex", justifyContent: "space-between"}}>
                <h1>{authDrawerDefaultForm == 0 ? "Login" : "Register"}</h1>
                <CloseButton clickFunc={hideAuthDrawer} />
            </div>
            <div className="authPanel">
                {authDrawerDefaultForm == 0 ? (
                        <>
                            <LoginForm/>
                            <hr className="divider"/>
                            <div>
                                <SecondaryButton text="Register" clickFunc={() => {setForm(1)}}/>
                            </div>
                        </>
                    ) : (
                        <>
                            <RegisterForm />
                            <hr className="divider"/>
                            <div>
                                <SecondaryButton text="Login" clickFunc={() => {setForm(0)}}/>
                            </div>
                        </>
                    )}
            </div>
   
            
        </div>
    )
};

export default AuthDrawer;