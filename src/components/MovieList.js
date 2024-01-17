import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    if (!movies) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div>
                <h1>{title}</h1>
                <div>
                    <MovieCard movie={movies[0]}/>
                </div>
            </div>
        </div>
    )
};

export default MovieList;