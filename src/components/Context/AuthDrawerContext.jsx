import { createContext, useState } from "react";

export const AuthDrawerContext = createContext();

const AuthDrawerContextProvider = ({children}) => {
    const [isAuthDrawerOpen, setIsAuthDrawerOpen] = useState(false);
    const [authDrawerDefaultForm, setAuthDrawerDefaultForm] = useState(0);

    const showAuthDrawer = () => {
        console.log("showing auth drawer");
        setIsAuthDrawerOpen(true);
    };

    const hideAuthDrawer = () => {
        console.log("hiding auth drawer");
        setIsAuthDrawerOpen(false);
    };

    const setForm = (form) => {
        console.log("setting auth draw default form")
        setAuthDrawerDefaultForm(form);
    }

    return (
        <AuthDrawerContext.Provider value={{isAuthDrawerOpen, showAuthDrawer, hideAuthDrawer, authDrawerDefaultForm, setForm}}>
            {children}
        </AuthDrawerContext.Provider>
    )
};

export default AuthDrawerContextProvider;