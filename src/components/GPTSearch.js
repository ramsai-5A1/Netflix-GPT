import { LOGIN_BACKGROUND_IMAGE_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img
                    alt="logo"
                    src={LOGIN_BACKGROUND_IMAGE_URL}
                />
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
};

export default GPTSearch;