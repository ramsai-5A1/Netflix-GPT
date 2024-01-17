import { useEffect } from "react";
import { addMovies } from "../utils/MoviesSlice";
import { BACKEND_MOVIES_LIST_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const hitBackendApiToGetMoviesList = async () => {
        const rawData = await fetch(BACKEND_MOVIES_LIST_URL);
        const data = await rawData.json();
        dispatch(addMovies(data));
    }

    useEffect(() => {
        hitBackendApiToGetMoviesList();
    }, []);
}

export default useNowPlayingMovies;