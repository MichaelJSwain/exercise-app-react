import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import {AuthDrawerContext} from "../Context/AuthDrawerContext";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const {showAuthDrawer} = useContext(AuthDrawerContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/workouts">WorkoutApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="navbar-link" aria-current="page" to="/workouts">Workouts</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-link" aria-current="page" to="/workouts">Progress</Link>
                </li>
                {user ? (
                    <>
                        <li className="nav-item">
                            <Link className="navbar-link" aria-current="page" to="/account">Account</Link>
                        </li>
                    </>
                ) : <>
                        <li className="nav-item">
                            <span onClick={() => {showAuthDrawer()}}>Login</span>
                            {/* <Link className="navbar-link" aria-current="page" to="/account/login">Login</Link> */}
                        </li>
                    </>
            }
                </ul>
            </div>
            </div>
        </nav>
    )
};

export default Navbar;