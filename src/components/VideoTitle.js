
const VideoTitle = ({ title, description }) => {
    return (
        <div className="pt-36 pl-12">
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="py-6 text-lg w-1/4">{description}</p>
            <div className="flex p-2 space-x-2">
                <button className="bg-white hover:bg-gray-400 p-4 text-black rounded-sm border text-xl  px-16 shadow-lg border-black">▶️ Play</button>
                <button className="bg-opacity-50 hover:bg-gray-300 p-4 bg-gray-500 shadow-lg px-16 rounded-sm text-white">More info</button>
            </div>
        </div>
    )
};

export default VideoTitle;