import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);

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
                            <Link className="navbar-link" aria-current="page" to="/account/login">Account</Link>
                        </li>
                        <li className="nav-item" onClick={logout}>
                            Logout
                        </li>
                    </>
                ) : <>
                        <li className="nav-item">
                            <Link className="navbar-link" aria-current="page" to="/account/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-link" aria-current="page" to="/account/register">Register</Link>
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