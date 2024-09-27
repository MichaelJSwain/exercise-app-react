import { createContext, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        console.log("logging in via auth context");
        const user = {
            username,
            password
        }

        const result = await axios.post("http://localhost:8080/exerciseApp/api/user/login", user)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setUser(user);
                    return "200";
                }
            })
            .catch(e => {
                return "400";
                console.log("error attempting to login = ", e);
            })
            return result;
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