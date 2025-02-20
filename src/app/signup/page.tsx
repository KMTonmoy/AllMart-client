"use client";

import React, { useState } from "react";
import { useLottie } from "lottie-react";
import signupAnimation from "../../../public/register.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignupPage = () => {
    const options = {
        animationData: signupAnimation,
        loop: true,
        style: { width: 350, height: 350 },
    };

    const { View } = useLottie(options);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-orange-500 to-purple-600">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 flex items-center w-3/4 max-w-4xl">
                <div className="flex-1 hidden md:flex justify-center items-center">
                    {View}
                </div>
                <div className="flex-1 flex flex-col justify-center items-center p-8">
                    <h2 className="text-3xl font-extrabold text-white mb-6">Welcome Back</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500 bg-gray-100 text-gray-800 shadow-md transition-all duration-300 ease-in-out hover:ring-orange-600"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500 bg-gray-100 text-gray-800 shadow-md transition-all duration-300 ease-in-out hover:ring-orange-600"
                    />
                    <PhoneInput
                        country={"bd"} 
                        inputClass="w-full px-5 py-4 text-lg mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500 bg-gray-100 text-gray-800 shadow-md transition-all duration-300 ease-in-out hover:ring-orange-600"
                    />
                    <div className="relative mt-2 w-full mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500 bg-gray-100 text-gray-800 shadow-md transition-all duration-300 ease-in-out hover:ring-orange-600"
                        />
                        <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </button>
                    </div>
                    <div className="relative w-full mb-4">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500 bg-gray-100 text-gray-800 shadow-md transition-all duration-300 ease-in-out hover:ring-orange-600"
                        />
                        <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-500" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </button>
                    </div>
                    <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-bold text-lg shadow-md">
                        Signup
                    </button>
                    <p className="text-white mt-4">
                        Already have an account? <Link href="/login" className="text-orange-300 hover:text-orange-500 font-bold">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
