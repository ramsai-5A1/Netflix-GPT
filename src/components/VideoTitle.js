
const VideoTitle = ({ title, description }) => {
    return (
        <div className="pt-36 pl-12">
            <h1 className="font-bold">{title}</h1>
            <p>{description}</p>
            <div className="flex p-2 space-x-2">
                <button className="bg-white hover:bg-gray-400 p-2 text-black rounded-sm border border-black">Play</button>
                <button className="bg-opacity-50 hover:bg-gray-300 p-2 bg-gray-500 rounded-sm text-white">More info</button>
            </div>
        </div>
    )
};

export default VideoTitle;