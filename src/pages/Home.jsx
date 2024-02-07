import UseFetch from "../hooks/useFetch";
import MovieCard from "../Componentes/MovieCard";
import Loading from "../Componentes/Loading";

import styles from "./home.module.css";
import ReleaseFilm from "../Componentes/ReleaseFilm";
import { useEffect, useState } from "react";
import axios from "axios";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const releaseURL = import.meta.env.VITE_RELEASES;

export default function Home() {
  const [releaseData, setReleaseData] = useState();
  const [ratedData, setRatedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const homeRequest = async () => {
    try {
      setLoading(true);
      // const reqRelease = await axios.get(
      //   `${releaseURL}${apiKey}&language=pt-BR`
      // );
      // setReleaseData(reqRelease.data.results);

      const reqRated = await axios.get(
        `${movieURL}top_rated?${apiKey}&language=pt-BR`
      );
      setRatedData(reqRated.data.results);
    } catch (error) {
      setLoading(false);
      console.log("Erro na requisição: [Home]");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    homeRequest();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.boxMovies}>
          {/* {releaseData && <ReleaseFilm data={releaseData} />} */}
          <h2>Filmes com melhor classificação:</h2>
          <div className={styles.boxShowMovies}>
            {ratedData.map((elm) => (
              <MovieCard key={elm.id} movie={elm} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
