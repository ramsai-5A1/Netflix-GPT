import { useEffect } from "react"
import { BACKEND_POPULAR_MOVIES_URL, USER_LOGIN_OBJ } from "../utils/constants";
import {useDispatch} from "react-redux";
import { addPopularMovies } from "../utils/MoviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

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
        hitBackendAndUpdateStore();
    }, []);
}

export default usePopularMovies;