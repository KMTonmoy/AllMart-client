"use client";

import React from "react";
import { useLottie } from "lottie-react";
import loginAnimation from "../../../public/login.json";
import Link from "next/link";
import { motion } from "framer-motion";

const LoginPage = () => {
    const options = {
        animationData: loginAnimation,
        loop: true,
        style: { width: 300, height: 300 },
    };

    const { View } = useLottie(options);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-orange-500 p-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white bg-opacity-30 backdrop-blur-md shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row items-center w-full max-w-4xl"
            >
                <div className="flex-1 hidden md:flex justify-center items-center">
                    {View}
                </div>

                <div className="flex-1 flex flex-col justify-center items-center p-6 w-full">
                    <h2 className="text-3xl font-extrabold text-white mb-6">Welcome Back</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-100 text-gray-800 shadow-md"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-100 text-gray-800 shadow-md"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-bold text-lg shadow-lg"
                    >
                        Login
                    </motion.button>
                    <p className="text-white mt-4">Don't have an account? <Link href="/signup" className="text-orange-300 hover:underline">Sign up</Link></p>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
