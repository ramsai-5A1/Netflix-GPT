import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, removeUserData } from "../utils/UserSlice";
import { BACKEND_IS_TOKEN_VALID_URL, NETFLIX_LOGO, SUPPORTED_LAUNGUAGES, USER_LOGIN_OBJ } from "../utils/constants";
import { useEffect, useMemo } from "react";
import { toggleShouldShowGptVariable } from "../utils/GptSlice";
import { changePreferredLaunguage } from "../utils/configSlice";

const hitBackendToVerifyToken = async (obj) => {
    if (obj === undefined || obj.token === undefined) {
        return {status: false};
    }
    const rawResponse = await fetch(BACKEND_IS_TOKEN_VALID_URL, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + obj.token
        }
    });
    const response = await rawResponse.json();
    return response;
}

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.user);
    const isGptSearchTrue = useSelector((store) => store.gpt.shouldShowGpt);
    
    useEffect(() => {
        const rawData = sessionStorage.getItem(USER_LOGIN_OBJ);
        if (rawData) {
            const mainData = JSON.parse(rawData);
            const response = hitBackendToVerifyToken(mainData);
            response.then(data => {
                if (data && data.status === true) {
                    dispatch(addUserData(mainData));
                    navigate("/browse");
                } else {
                    navigate("/");
                    dispatch(removeUserData());
                    sessionStorage.removeItem(USER_LOGIN_OBJ);
                }
            })
            .catch((err) => {
                navigate("/");
                dispatch(removeUserData());
                sessionStorage.removeItem(USER_LOGIN_OBJ);
            });
        } else {
            navigate("/");
            dispatch(removeUserData());
        }
    }, []);

    const handleSignOut = () => {
        navigate("/");
        dispatch(removeUserData());
        sessionStorage.removeItem(USER_LOGIN_OBJ);
    }

    const handleGptSearchClick = () => {
        dispatch(toggleShouldShowGptVariable());
    }

    const modifyLaunguage = (event) => {
        dispatch(changePreferredLaunguage(event.target.value));
    }

    return (
        <div className="z-10 w-screen py-2 px-8 bg-gradient-to-b from-black absolute flex justify-between">
            <img
                className="w-48"
                src={NETFLIX_LOGO}
                alt="logo"
            />
            {userData && (
                <div className="flex p-2  space-x-2">
                    {isGptSearchTrue && (
                        <select onChange={modifyLaunguage} className="bg-black text-white p-2 m-2 rounded-sm">
                            {SUPPORTED_LAUNGUAGES.map((element) => <option key={element.identifier} value={element.identifier}>{element.name}</option>)}
                        </select>
                    )}
                    <button onClick={handleGptSearchClick} className="p-2 rounded-lg h-10 shadow-lg  mx-2 my-2 tex-white bg-violet-600">GPT search</button>
                    <span className="bg-green-600 w-auto h-10 rounded-lg shadow-lg p-2">{ userData.fullName }</span>
                    <img
                        className="w-12 h-12"
                        alt="smilie-logo"
                        src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg"
                    />
                    <button onClick={handleSignOut} className="bg-red-600 font-bold rounded-lg shadow-lg w-auto p-1 h-7">(Sign-out)</button>
                </div>
            )}
            
        </div>
    )
};

export default Header;