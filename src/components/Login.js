import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { BACKEND_LOGIN_URL, BACKEND_SIGNUP_URL, LOGIN_BACKGROUND_IMAGE_URL, USER_LOGIN_OBJ } from "../utils/constants";
import {useDispatch} from "react-redux"
import { addUserData } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";

const buttonList = ["Sign In", "Sign Up"]
const messagesList = ["New to Netflix? Sign up now", "Already had an account ? Login now"]

const Login = () => {

    const navigate = useNavigate();
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const getResponseFromBackendForSignup = async () => {
        const user = {
            email: (email && email.current) ? email.current.value : null, 
            password: (password && password.current) ? password.current.value : null,
            fullName: (name && name.current) ? name.current.value : null
        };
        const response = await fetch(!isLoginForm ? BACKEND_SIGNUP_URL : BACKEND_LOGIN_URL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        if(!data.success) {
            setErrorMessage(data.message);
        }
        setErrorMessage("");
        dispatch(addUserData(data.data));
        sessionStorage.setItem(USER_LOGIN_OBJ, JSON.stringify(data.data));
        navigate('/browse');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const result = checkValidData(email.current.value, password.current.value, (name && name.current) ? name.current.value : null);
        if(result) {
            setErrorMessage(result);
            return;
        }
        getResponseFromBackendForSignup();
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                    className="h-screen"
                    alt="background"
                    src={LOGIN_BACKGROUND_IMAGE_URL}
                />
            </div>

            <form onSubmit={handleFormSubmit} className="rounded-sm w-3/4 md:w-3/12 absolute text-white bg-opacity-70 p-12 bg-black my-36 mx-auto left-0 right-0">
                <h1 className=" font-bold text-xl md:text-3xl py-2 md:py-4">{isLoginForm ? buttonList[0] : buttonList[1]}</h1>
                {!isLoginForm && <input ref={name} className="rounded-sm p-4 my-4 w-full bg-slate-800" type="text" placeholder="Enter your full-name"/>}
                <input ref={email} className="rounded-sm p-4 my-4 w-full bg-slate-800" type="text" placeholder="Email or phone number"/>
                <input ref={password} className="rounded-sm p-4 my-4 w-full bg-slate-800" type="password" placeholder="Password"/>
                <p className="text-red-600 text-sm md:text-lg font-bold">{errorMessage}</p>
                <button className="rounded-lg p-3 md:p-5 my-6 bg-red-600 w-full">{isLoginForm ? buttonList[0] : buttonList[1]}</button>
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