import { useState } from "react";
import Header from "./Header";

const messagesList = ["New to Netflix? Sign up now", "Already had an account ? Login now"]

const Login = () => {

    const [isLoginForm, setIsLoginForm] = useState(true);

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                    alt="background"
                    src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
                />
            </div>

            <form className="rounded-sm w-3/12 absolute text-white bg-opacity-70 p-12 bg-black my-36 mx-auto left-0 right-0">
                <h1 className=" font-bold text-3xl py-4">{isLoginForm ? "Sign in" : "Sign up"}</h1>
                <input className="rounded-sm p-4 my-4 w-full bg-slate-800" type="text" placeholder="Email or phone number"/>
                <input className="rounded-sm p-4 my-4 w-full bg-slate-800" type="password" placeholder="Password"/>
                <button className="rounded-lg p-5 my-6 bg-red-600 w-full">Sign In</button>
                <div className="flex justify-between">
                    <span>Remember me</span>
                    <span>Need help?</span>
                </div>

                <p className="py-5 hover:cursor-pointer" onClick={() => setIsLoginForm(!isLoginForm)}>{isLoginForm ? messagesList[0] : messagesList[1]}</p>
            </form>
            
        </div>
    )
};

export default Login;