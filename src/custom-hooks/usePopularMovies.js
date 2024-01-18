import { useEffect } from "react"
import { BACKEND_POPULAR_MOVIES_URL, USER_LOGIN_OBJ } from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import { addPopularMovies } from "../utils/MoviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    const hitBackendAndUpdateStore = async () => {
        const rawData = await fetch(BACKEND_POPULAR_MOVIES_URL, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem(USER_LOGIN_OBJ)).token
            }
        });
        const data = await rawData.json();
        dispatch(addPopularMovies(data.videosData));
    }

    useEffect(() => {
        !popularMovies && hitBackendAndUpdateStore();
    }, []);
}

export default usePopularMovies;