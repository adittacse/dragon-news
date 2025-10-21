import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { useContext } from 'react';
import AuthContext from '../provider/AuthContext';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const handleLogout = () => {
        userSignOut()
            .then(() => {
                console.log("Sign-out successful");
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div className="flex items-center justify-between">
            <div className="">{user && user.displayName}</div>
            <div className="nav flex items-center justify-center text-accent text-lg gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="btn-login flex items-center gap-2.5">
                <img className="w-10 h-10" src={userIcon} alt="user" />
                {
                    user ? <button onClick={handleLogout} className="btn btn-primary font-semibold text-[20px] px-10 py-[6px]">Logout</button> : <Link to="/auth/login" className="btn btn-primary font-semibold text-[20px] px-10 py-[6px]">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;