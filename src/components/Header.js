import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUserData } from "../utils/UserSlice";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.user);

    const handleSignOut = () => {
        navigate("/");
        dispatch(removeUserData());
        console.log("Logged out successfully");
    }

    return (
        <div className="z-10 w-screen py-2 px-8 bg-gradient-to-b from-black absolute flex justify-between">
            <img
                className="w-48"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {userData && <div className="flex p-2 justify-between space-x-2">
                <span className="bg-red-500 w-auto h-10 rounded-lg shadow-lg p-2">{userData.data.fullName}</span>
                <img
                    className="w-12 h-12"
                    alt="smilie-logo"
                    src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg"
                />
                <button onClick={handleSignOut} className="bg-red-600 font-bold rounded-lg shadow-lg w-auto p-1 h-7">(Sign-out)</button>
            </div>}
            
        </div>
    )
};

export default Header;