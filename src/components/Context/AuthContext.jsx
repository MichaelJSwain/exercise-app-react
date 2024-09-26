import { createContext, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        console.log("logging in via auth context");

        
        const user = {
            username,
            password
        }

        axios.post("http://localhost:8080/exerciseApp/api/user/login", user)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setUser(user);
                    const navigate = useNavigate();
                    const {pathname} = useLocation();
                    navigate(pathname);
                }
            })
            .catch(e => {
                console.log("error attempting to login = ", e);
            })
      };
    
      const logout = () => {
        setUser(null);
      };
    
      const register = (username, password) => {
        const newUser = {
            username,
            password
        }
        axios.post("http://localhost:8080/exerciseApp/api/user/register", newUser)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setUser(newUser);
                }
            })
            .catch(e => {
                console.log("error attempting to register user = ", e);
            });
      };

    return (
        <AuthContext.Provider value={{user, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;