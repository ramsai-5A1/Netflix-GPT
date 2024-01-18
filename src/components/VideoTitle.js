
const VideoTitle = ({ title, description }) => {
    return (
        <div className="pt-[30%] md:pt-[20%] pl-[5%] w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-lg md:text-6xl">{title}</h1>
            <p className="hidden md:inline-block md:py-6 md:text-lg md:w-1/4">{description}</p>
            <div className="flex p-2 space-x-2">
                <button className="bg-white hover:bg-opacity-50 p-2 md:p-4 text-black rounded-sm border text-sm md:text-xl px-8 md:px-16 shadow-lg border-black">▶️ Play</button>
                <button className="hidden md:inline-block bg-opacity-50 hover:bg-gray-300 p-2 md:p-4 bg-gray-500 shadow-lg px-8 md:px-16 rounded-sm text-white">More info</button>
            </div>
        </div>
    )
};

export default VideoTitle;