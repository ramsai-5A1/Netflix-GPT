
const MovieCard = ({movie}) => {
    const { thumbnailUrl } = movie;

    return (
        <div>
            <div className="w-[200px] h-[300px] rounded-full shadow-lg">
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