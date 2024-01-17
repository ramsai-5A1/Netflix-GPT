import { useEffect } from "react";
import { API_OPTIONS, BACKEND_TRAILERS_DATA_URL, USER_LOGIN_OBJ } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MoviesSlice";

const useTrailerVideo = () => {
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
            const index = Math.floor(Math.random() * data.trailersData.length);
            dispatch(addTrailerVideo(data.trailersData[index]));
        }
    }

    useEffect(() => {
        fetchDataFromBackend();
    }, []);
}

export default useTrailerVideo;