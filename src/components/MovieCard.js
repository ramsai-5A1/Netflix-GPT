
const MovieCard = ({movie}) => {
    const { thumbnailUrl } = movie;

    return (
        <div>
            <div className="md:w-[200px]  w-36  rounded-full shadow-lg">
                <img
                    alt="thumbNail"
                    src={thumbnailUrl}
                    className="h-[300px] aspect-w-16"
                />
            </div>
        </div>
    )
};

export default MovieCard;