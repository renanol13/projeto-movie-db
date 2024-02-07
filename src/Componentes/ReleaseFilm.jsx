import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
const imageUrl = import.meta.env.VITE_IMG;

import styles from "./releaseFilm.module.css";
import { useEffect, useState } from "react";

function ReleaseFilm({ data }) {
  const [slidePreview, setSlidePreview] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setSlidePreview(3);
      }

      if (window.innerHeight <= 400) {
        setSlidePreview(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiperConfig = {
    modules: [Navigation, Pagination, Scrollbar, Autoplay],
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    slidesPerView: { slidePreview },
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 100,
  };

  return (
    <div className={styles.releaseFilm}>
      <swiper {...swiperConfig}>
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className={styles.boxCard}>
              <img src={imageUrl + movie.poster_path} alt={movie.id} />
            </div>
          </SwiperSlide>
        ))}
      </swiper>
      {/* <h1>{data[0].title}</h1> */}
    </div>
  );
}

//SwiperSlide é cada parte do slide

export default ReleaseFilm;
