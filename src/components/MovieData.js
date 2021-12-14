function MovieData({ longTitle, img, genres, like, rating, runtime }) {
    return (
        <div>
            <h1>{longTitle}</h1>
            <img src={img} />
            <div>
                {genres}
            </div>
            <div>{like}</div>
            <div>{rating}</div>
            <div>{runtime}</div>
        </div>
    );
}

export default MovieData;