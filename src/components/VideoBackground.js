import { useEffect } from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../custom-hooks/useTrailerVideo";

const VideoBackground = () => {  
    const trailer = useSelector((store) => store.movies?.trailerVideo);
    useTrailerVideo();

    useEffect(() => {
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