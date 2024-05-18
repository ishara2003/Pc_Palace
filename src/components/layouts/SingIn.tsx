import { useEffect, useState } from "react";

import './CSS/FooterCss.css'


function SignIn() {




    return (
        <div className = "signInMainDiv">
        <div className = "z-10  absolute flex items-center justify-center w-full h-[104vh] left-0 bg-white opacity-30 top-0">

            </div>
            <div   className = "z-10 absolute flex items-center justify-center w-full h-[95vh] left-0">
            <div   className = "absolute flex items-center justify-center border-2 p-10 bg-white">
            <div   className = "login">
            <form  className = "max-w-md mx-auto my-8">
            <div   className = "mb-4">
            <label className = "block text-gray-700 text-sm font-bold mb-2">
                                    User Name / Email
                                </label>
                                <input className = "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                       id        = "userName"
                                       type      = "text" placeholder = "Enter Your User Name"
                                />
                            </div>
                            <div   className = "mb-4">
                            <label className = "block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                    <input className = "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                           id        = "loginPassword"
                                           type      = "password" placeholder = "Enter Your Password"
                                    />
                                </label>
                            </div>
                            <a   href      = "#">Forgot Password ?</a>
                            <div className = "flex items-center justify-between">
                                <button
                                    className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type      = "submit"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <div   className = "register">
                    <form  className = "max-w-md mx-auto my-8">
                    <div   className = "mb-4">
                    <label className = "block text-gray-700 text-sm font-bold mb-2">
                                    User Name
                                </label>
                                <input className = "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                       id        = "regUserName"
                                       type      = "text" placeholder = "Enter Your User Name"
                                />
                            </div>
                            <div   className = "mb-4">
                            <label className = "block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input className = "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                       id        = "userEmail"
                                       type      = "email" placeholder = "Enter Your User Name"
                                />
                            </div>
                            <div   className = "mb-4">
                            <label className = "block text-gray-700 text-sm font-bold mb-2">
                                    Contact Number
                                </label>
                                <input className = "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                       id        = "userMobile"
                                       type      = "tel" placeholder = "Enter Your User Mobile"
                                />
                            </div>
                            <div   className = "mb-4">
                            <label className = "block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                    <input className = "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                           id        = "regPassword"
                                           type      = "password" placeholder = "Enter Your Password"
                                    />
                                </label>
                            </div>
                            <div   className = "mb-4">
                            <label className = "block text-gray-700 text-sm font-bold mb-2">
                                    Confirm Password
                                    <input className = "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                           id        = "regConPassword"
                                           type      = "password" placeholder = "Enter Your Password Confirmation"
                                    />
                                </label>
                            </div>
                            <div className = "flex items-center justify-between">
                                <button
                                    className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type      = "submit"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;

