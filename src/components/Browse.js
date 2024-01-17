import { useNavigate } from "react-router-dom";
import Header from "./Header";
import {useSelector} from "react-redux"
import { useEffect } from "react";
import { BACKEND_MOVIES_LIST_URL } from "../utils/constants";
import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    useNowPlayingMovies();
    
    useEffect(() => {
        if(!user) {
            navigate("/");
        }
    }, []);
    

    return (
        <div className="flex flex-col">
            <Header/> 
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
};

export default Browse;