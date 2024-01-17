import { useEffect } from "react";
import { BACKEND_TRAILERS_DATA_URL, USER_LOGIN_OBJ } from "../utils/constants";

const VideoBackground = () => {  
    
    const fetchTrailerDataFromBackend = async () => {
        const rawData = await fetch(BACKEND_TRAILERS_DATA_URL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem(USER_LOGIN_OBJ)).token
            }
        });
        const data = await rawData.json();
        console.log(data);
    }

    useEffect(() => {
        fetchTrailerDataFromBackend();
    }, []);

    return (
        <div>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/pxZQaajtZF4?si=J8DLJcfWj216Fx6T" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
        </div>
    )
};

export default VideoBackground;