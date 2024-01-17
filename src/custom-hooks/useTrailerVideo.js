import { useEffect } from "react";
import { API_OPTIONS, BACKEND_TRAILERS_DATA_URL, USER_LOGIN_OBJ } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MoviesSlice";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const fetchDataFromBackend = async () => {
        const rawData = await fetch(BACKEND_TRAILERS_DATA_URL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem(USER_LOGIN_OBJ)).token
            }
        });
        const data = await rawData.json();
        //Todo: Collect respective trailer and then store it into the store
        if (data && data.trailersData) {
            const trailer = data.trailersData.filter((video) => video.id == movieId);
            dispatch(addTrailerVideo(trailer[0]));
        }
    }

    useEffect(() => {
        fetchDataFromBackend();
    }, []);
}

export default useTrailerVideo;