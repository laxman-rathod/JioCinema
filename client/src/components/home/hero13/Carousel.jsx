import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../component_styles/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import Skeleton4 from "../../../util/Skeleton4";

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/movies/hollywood-in-hindi/"
        );
        setMovies(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton4 />
      ) : (
        <div className="cursor-pointer w-full h-[17rem]">
          <Swiper
            slidesPerView={6.5}
            spaceBetween={10}
            loop={true}
            className="mySwiper"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <img
                  src={movie.thumbnail}
                  alt={`${movie.title} poster`}
                  className="rounded-lg"
                />
                <div
                  onClick={() =>
                    navigate(
                      `/${
                        movie.contentType === "Movie" ? "movies" : "tv-shows"
                      }/${movie.title}`
                    )
                  }
                  className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.10] transition-opacity duration-300 rounded-lg"
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Carousel;
