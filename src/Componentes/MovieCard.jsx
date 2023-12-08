import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./movieCard.module.css";

const imageUrl = import.meta.env.VITE_IMG;

export default function MovieCard({ movie }) {
  const [ShowDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div
      className={styles.boxCard}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className={styles.boxImg}>
        <img src={imageUrl + movie.poster_path} alt="movie.title" />
      </div>
      
      <p>{movie.title}</p>
      {ShowDetails && (
        <div className={styles.boxShow}>
          <Link to={`/detailMovie/${movie.id}`}>Details</Link>
        </div>
      )}
    </div>
  );
}
