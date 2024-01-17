import { useEffect } from "react";
import { BACKEND_TRAILERS_DATA_URL, USER_LOGIN_OBJ } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/MoviesSlice";

const VideoBackground = () => {  
    const dispatch = useDispatch();
    const trailer = useSelector((store) => store.movies?.trailerVideo);

    const fetchTrailerDataFromBackend = async () => {
        const rawData = await fetch(BACKEND_TRAILERS_DATA_URL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem(USER_LOGIN_OBJ)).token
            }
        });
        const data = await rawData.json();
        const index = Math.floor(Math.random() * data.trailersData.length);
        dispatch(addTrailerVideo(data.trailersData[index]));
    }

    useEffect(() => {
        fetchTrailerDataFromBackend();
    }, []);

    if (!trailer) {
        return <h1>Loading....</h1>
    }

    return (
        <div>
            <iframe 
                width="560" 
                height="315" 
                src={ "https://www.youtube.com/embed/" + trailer.key} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
        </div>
    )
};

export default VideoBackground;