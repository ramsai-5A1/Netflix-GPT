import {useSelector} from "react-redux";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    

    return (
        <div>
            MainContainer
        </div>
    )
};

export default MainContainer;