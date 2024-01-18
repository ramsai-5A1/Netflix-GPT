import { useRef } from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openAi";

const GptSearchBar = () => {

    const preferredLaunguage = useSelector((store) => store.config.preferredLaunguage);
    const searchText = useRef(null);

    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

    const handleButtonClick = async () => {
        console.log(searchText.current.value);
        // make an api call to openai and get movie results
        const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query: " + 
        searchText.current.value + 
        " only give names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, sholey, shiva, don, leo"
        
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
        console.log(gptResults);
    }

    return (
        <div className="pt-[20%] flex justify-center">
            <form onSubmit={handleOnSubmit} className="w-1/2 h-1/5 bg-black grid grid-cols-12">
                <input ref={searchText} className="col-span-9 p-4 m-4 w-auto" type="text" placeholder={language[preferredLaunguage].gptSearchPlaceholder}/>
                <button onClick={handleButtonClick} className="col-span-3 p-4 m-4 bg-red-700 text-white">{language[preferredLaunguage].search}</button>
            </form>
        </div>
    )
};

export default GptSearchBar;