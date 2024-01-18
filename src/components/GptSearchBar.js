import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

    const preferredLaunguage = useSelector((store) => store.config.preferredLaunguage);

    return (
        <div className="pt-[20%] flex justify-center">
            <form className="w-1/2 h-1/5 bg-black grid grid-cols-12">
                <input className="col-span-9 p-4 m-4 w-auto" type="text" placeholder={language[preferredLaunguage].gptSearchPlaceholder}/>
                <button className="col-span-3 p-4 m-4 bg-red-700 text-white">{language[preferredLaunguage].search}</button>
            </form>
        </div>
    )
};

export default GptSearchBar;