import { useSearchParams } from "react-router-dom";
import UseFetch from "../hooks/useFetch";

import MovieCard from "../Componentes/MovieCard";
import Loading from "../Componentes/Loading";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import styles from "./search.module.css";
import { useLayoutEffect } from "react";

export default function Search() {
  const [searchParams] = useSearchParams();

  const params = searchParams.get("q");

  const { data, loading } = UseFetch(`${searchURL}?${apiKey}&query=${params}&language=pt-BR`);

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  }, [searchParams])
  
  return (
    <>
      {loading ? <Loading/> : data.results && data?.results.length > 0 ? (
        <div className={styles.boxSearch}>
          <h2>Resultados de: "{params}"</h2>
          <div className={styles.boxResults}>
            {data.results.map((elm) => (
              <MovieCard movie={elm} key={elm.id} />
            ))}
          </div>
        </div>
      ) : (
        <p className={styles.notFound}>Nenhum filme encontrado para essa Pesquisa...</p>
      )}
    </>
  );
}
