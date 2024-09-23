import { useState } from "react";
import { Link } from "react-router-dom";  // Link for navigation

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Successful", formData);

    };

    return (
        <div className="min-h-screen bg-myBg sm:flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-myBg2 p-8 rounded shadow-lg sm:max-w-md w-full min-h-screen sm:min-h-min"
            >
                <h2 className="text-2xl mb-6 font-bold text-white">Login</h2>

                <div className="mb-4">
                    <label className="block text-white mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-myBg text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-myBg text-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-myBlue hover:bg-myBlue/50 transition text-white py-2 rounded mb-4"
                >
                    Login
                </button>


                <div className="flex justify-between items-center text-sm">
                    <Link
                        to="/forgot-password"
                        className="text-myBlue hover:text-myBlue2"
                    >
                        Forgot Password?
                    </Link>

                    <Link
                        to="/register"
                        className="text-myBlue hover:text-myBlue2"
                    >
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
