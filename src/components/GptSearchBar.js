
const GptSearchBar = () => {
    return (
        <div className="pt-[20%] flex justify-center">
            <form className="w-1/2 h-1/5 bg-black grid grid-cols-12">
                <input className="col-span-9 p-4 m-4 w-auto" type="text" placeholder="what would you like to watch today ?"/>
                <button className="col-span-3 p-4 m-4 bg-red-700 text-white">Search</button>
            </form>
        </div>
    )
};

export default GptSearchBar;