import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { useContext } from 'react';
import AuthContext from '../provider/AuthContext';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex items-center justify-between">
            <div className="">{user && user.name}</div>
            <div className="nav flex items-center justify-center text-accent text-lg gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="btn-login flex items-center gap-2.5">
                <img className="w-10 h-10" src={userIcon} alt="user" />
                <Link to="/auth/login" className="btn btn-primary font-semibold text-[20px] px-10 py-[6px]">{user ? "Logout" : "Login"}</Link>
            </div>
        </div>
    );
};

export default Navbar;