import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h2 className="font-semibold text-3xl text-center mt-[40px] mb-[10px]">Register your account</h2>
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">
                            <label className="label">Your Name</label>
                            <input name="name" type="text" className="input" placeholder="Enter your name" />
                            <label className="label">Photo URL</label>
                            <input name="photo" type="text" className="input" placeholder="Enter your photo URL" />
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Enter your email address" />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Enter your password" />
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="text-center font-semibold text-accent mt-2.5">Already Have An Account? Please <Link to="/auth/login" className="text-secondary">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;