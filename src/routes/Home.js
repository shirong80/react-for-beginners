import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies().then();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading..</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              year={item.year}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
