import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const getDetail = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();
    return json.data.movie;
  };

  useEffect(() => {
    getDetail().then((result) => {
      setLoading(false);
      setMovie(result);
    });
  }, []);

  window.console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
        </div>
      )}
    </div>
  );
}
export default Detail;
