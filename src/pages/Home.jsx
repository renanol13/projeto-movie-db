import UseFetch from "../hooks/useFetch";
import MovieCard from "../Componentes/MovieCard";
import Loading from "../Componentes/Loading";

import styles from "./home.module.css";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const { data, loading } = UseFetch(`${movieURL}top_rated?${apiKey}`);

  return (
    <>
      {loading ? <Loading/> : (
        <div className={styles.boxMovies}>
          <h2>Best rated Movies:</h2>
          <div className={styles.boxShowMovies}>
            {data.results &&
              data.results.map((elm) => <MovieCard key={elm.id} movie={elm} />)}
          </div>
        </div>
      )}
    </>
  );
}
