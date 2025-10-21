import { useContext, useState } from 'react';
import { Link } from 'react-router';
import AuthContext from '../provider/AuthContext';

const Register = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess("");
        setError("");

        createUser(email, password)
            .then(result => {
                setUser(result.user);
                updateUserProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                .then(() => {
                    setSuccess("User Registered Successfully");
                })
                .catch(error => {
                    setError(error.message);
                });
            })
            .catch(error => {
                setError(error.message);
            });
    }

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h2 className="font-semibold text-3xl text-center mt-[40px] mb-[10px]">Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <label className="label">Your Name</label>
                            <input name="name" type="text" className="input" placeholder="Enter your name" required />
                            <label className="label">Photo URL</label>
                            <input name="photo" type="text" className="input" placeholder="Enter your photo URL" required />
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Enter your email address" required />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Enter your password" required />
                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className="text-center font-semibold text-accent mt-2.5">Already Have An Account? Please <Link to="/auth/login" className="text-secondary">Login</Link></p>
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

export default Register;