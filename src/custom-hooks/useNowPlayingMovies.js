import { useEffect } from "react";
import { addMovies } from "../utils/MoviesSlice";
import { BACKEND_MOVIES_DATA_URL, USER_LOGIN_OBJ } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const hitBackendApiToGetMoviesList = async () => {
        const sessionData = JSON.parse(sessionStorage.getItem(USER_LOGIN_OBJ));
        const rawData = await fetch(BACKEND_MOVIES_DATA_URL, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + (sessionData && sessionData["token"]),

            }
        });
        const data = await rawData.json();
        dispatch(addMovies(data));
    }

    useEffect(() => {
        hitBackendApiToGetMoviesList();
    }, []);
}

export default useNowPlayingMovies;