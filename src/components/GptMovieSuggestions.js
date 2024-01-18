import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const { moviesResult, moviesList } = useSelector((store) => store.gpt);
    if (!moviesList) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="p-4 m-4 text-white bg-black">
            {moviesList.map((title, index) => <MovieList key={title} title={title} movies={moviesResult[index]}/>)}
        </div>
    )
};

export default GptMovieSuggestions;