import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        dob: "",
        email: "",
        password: "",
        confirmPassword: "",
        isFromPS: false,
    });

    const [errors, setErrors] = useState({
        passwordMismatch: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setErrors({ passwordMismatch: true });
        } else {
            setErrors({ passwordMismatch: false });
            console.log("Registration Successful", formData);
        }
    };

    return (
        <div className="min-h-screen bg-myBg sm:flex items-center justify-center ">
            <form
                onSubmit={handleSubmit}
                className="bg-myBg2 p-8 rounded shadow-lg sm:max-w-md w-full min-h-screen sm:min-h-min "
            >
                <h2 className="text-2xl mb-6 font-bold text-white">Register</h2>

                <div className="mb-4">
                    <label className="block text-white mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-myBg text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white mb-2">Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-myBg text-white"
                        required
                    />
                </div>

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
                        className="w-full px-4 py-2 rounded bg-myBg  text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white mb-2">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-myBg text-white"
                        required
                    />
                    {errors.passwordMismatch && (
                        <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
                    )}
                </div>

                <div className="mb-6">
                    <label className="flex items-center text-white">
                        <input
                            type="checkbox"
                            name="isFromPS"
                            checked={formData.isFromPS}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Are you from PS?
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-myBlue hover:bg-myBlue2/50 transition text-white py-2 rounded"
                >
                    Register
                </button>
                <div className="flex justify-end items-center text-sm mt-4">


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

export default Register;
