function MovieData() {
    return (
        <div>
            <h1>{movie.title_long}</h1>
            <img src={movie.background_image} />
            <div>
                {movie.genres.map((g) => (
                    <p key={g}>{g}</p>
                ))}
            </div>
            <div>{movie.like_count}</div>
            <div>{movie.rating}</div>
            <div>{movie.runtime}</div>
        </div>
    );
}