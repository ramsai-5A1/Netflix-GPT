import { useRef } from "react";
import language from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { addMoviesInformation } from "../utils/GptSlice";
import { BACKEND_OPENAI_SEARCH_INFO, USER_LOGIN_OBJ } from "../utils/constants";
//import openai from "../utils/openAi";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const preferredLaunguage = useSelector((store) => store.config.preferredLaunguage);
    const searchText = useRef(null);

    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

    const handleButtonClick = async () => {
        //console.log(searchText.current.value);
        //Todo: We need to do actual api call, but since we need to buy the openAI so at present i am hardcoding it to a single list.
        // make an api call to openai and get movie results
        // const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query: " + 
        // searchText.current.value + 
        // " only give names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, sholey, shiva, don, leo"
        
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });
        // console.log(gptResults);
        //Making dummy Backend api to get static data
        const rawData = await fetch(BACKEND_OPENAI_SEARCH_INFO, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem(USER_LOGIN_OBJ)).token
            }
        });
        const data = await rawData.json();
        const {moviesList, moviesResult} = data;
        dispatch(addMoviesInformation({ moviesList: moviesList, moviesResult: moviesResult }));
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