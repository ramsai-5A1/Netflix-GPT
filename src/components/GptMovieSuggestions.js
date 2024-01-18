import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
    const { moviesResult, moviesList } = useSelector((store) => store.gpt);
    if (!moviesList) {
        return <h1>Loading...</h1>
    }

    console.log("Rendering GptMovieSuggestions");

    return (
        <div className="p-4 m-4 text-white">
            {moviesList}
        </div>
    )
};

export default GptMovieSuggestions;