import { useSelector } from "react-redux";
import useTrailerVideo from "../custom-hooks/useTrailerVideo";

const VideoBackground = ({id}) => {  
    const trailer = useSelector((store) => store.movies?.trailerVideo);
    useTrailerVideo(id);

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