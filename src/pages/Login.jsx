import { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../provider/AuthContext';

const Login = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const { userSignIn, setUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess("");
        setError("");

        userSignIn(email, password)
            .then(result => {
                setUser(result.user);
                setSuccess("Logged-in successful");
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                setError(error.message);
            });
    }

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h2 className="font-semibold text-3xl text-center mt-[40px] mb-[10px]">Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="text-center font-semibold text-accent mt-2.5">Don’t Have An Account ? <Link to="/auth/register" className="text-secondary">Register</Link></p>
                    {
                        success && <p className="text-green-500 text-center">{success}</p>
                    }
                    {
                        error && <p className="text-red-500 text-center">{error}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;