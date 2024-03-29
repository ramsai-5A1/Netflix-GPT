import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    return (
        <div className=" bg-black">
            <div className="md:-mt-36 mt-0 relative z-20 pl-0 md:pl-12">
                <MovieList title = { "Now Playing" } movies={nowPlayingMovies}/>
                <MovieList title = { "Trending" } movies={nowPlayingMovies}/>
                <MovieList title = { "Popular" } movies={popularMovies}/>
                <MovieList title = { "Upcoming" } movies={nowPlayingMovies}/>
                <MovieList title = { "Horror" } movies={nowPlayingMovies}/>
            </div>
            
        </div>
    )
};

export default SecondaryContainer;