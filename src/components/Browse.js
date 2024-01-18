import { useNavigate } from "react-router-dom";
import Header from "./Header";
import {useSelector} from "react-redux"
import { useEffect } from "react";
import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../custom-hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";

const Browse = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const shouldShowGpt = useSelector((store) => store.gpt.shouldShowGpt);
    useNowPlayingMovies();
    usePopularMovies();
    
    useEffect(() => {
        if(!user) {
            navigate("/");
        }
    }, []);
    

    return (
        <div className="flex flex-col">
            <Header/> 
            {shouldShowGpt ? (
                <GPTSearch/>
            ) : (
                <>
                    <MainContainer/>
                    <SecondaryContainer/>
                </>
            )}
            
        </div>
    )
};

export default Browse;