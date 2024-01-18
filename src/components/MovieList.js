import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    if (!movies) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div className="p-6">
                <h1 className="text-white p-3 font-bold text-3xl">{title}</h1>
                <div className="flex space-x-3 p-2 overflow-x-scroll">
                    {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </div>
    )
};

export default MovieList;