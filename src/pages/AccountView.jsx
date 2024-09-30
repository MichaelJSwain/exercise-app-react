import { useContext } from "react";
import { AuthContext } from "../components/Context/AuthContext";

const AccountView = () => {
    const {user, logout} = useContext(AuthContext);

    return (
        <div>
            <h1>My Account {user ? ` - ${user.user.username}` : null}</h1>

            <button onClick={() => {logout()}}>Logout</button>
        </div>
    )
};

export default AccountView;