import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieData from "../components/MovieData";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading..</h1>
            ) : (
                <div>
                    <MovieData
                        longTitle={movie.title_long}
                        img={movie.background_image}
                        genres={movie.genres.map((g) => (
                            <p key={g}>{g}</p>
                        ))}
                        like={movie.like_count}
                        rating={movie.rating}
                        runtime={movie.runtime}
                    />
                </div>
            )
            }
        </div>
    );
}

export default Detail;