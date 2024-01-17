import {useSelector} from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) {
        return;
    }
    const oneMainMovie = movies[Math.floor(Math.random() * movies.length)];
    //const oneMainMovie = movies[0];
    const { id, title, description } = oneMainMovie;
    return (
        <div>
            <VideoTitle title={title} description={description}/>
            <VideoBackground id={id} />
        </div>
    )
};

export default MainContainer;