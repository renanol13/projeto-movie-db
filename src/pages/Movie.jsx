import { useParams } from "react-router-dom";
import UseFetch from "../hooks/useFetch";
import { IoStar } from "react-icons/io5";

import styles from "./Movie.module.css";
import Loading from "../Componentes/Loading";
import { useLayoutEffect } from "react";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

export default function Movie() {

  const { id } = useParams();
  const { data, loading } = UseFetch(`${movieURL}${id}?${apiKey}&language=pt-BR`);

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  }, [id])



  const formatMoney = (value) => {
    return value?.toLocaleString(navigator.language, {
      style: "currency",
      currency: "USD",
    })
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        data && (
          <>
            <img
              src={imageUrl + data.backdrop_path}
              alt={data.title}
              className={styles.boxBackdrop}
            />

            <div className={styles.boxMain}>
              <img
                src={imageUrl + data.poster_path}
                alt={data.title}
                className={styles.boxCover}
              />
              <div className={styles.boxData}>
                <h2>{data.title}</h2>
                <p className={styles.overview}>{data.overview}</p>
                <p>
                  <IoStar /> {data.vote_average?.toFixed(1)}
                </p>

                <p>
                    {data.runtime}<span> Minutos</span>
                </p>
                <p>
                  <span>Gastos: </span>{formatMoney(data.budget)}
                </p>
                <p>
                  <span>Receita: </span>{formatMoney(data.revenue)}
                </p>
                <p>
                  <span>Data de lançamento: </span>
                  {data.release_date}
                </p>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
}
