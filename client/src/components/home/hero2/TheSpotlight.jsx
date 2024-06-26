import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Skeleton2 from "../../../util/Skeleton2";

const TheSpotlight = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/movies/trending-movies"
        );
        setMovies(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton2 />
      ) : (
        <div className="flex items-center justify-start gap-3">
          {movies.map((movie) => (
            <div key={movie.id} className="w-full h-full">
              <img
                src={movie.thumbnail}
                alt={`${movie.title} poster`}
                className="w-full h-[21rem] object-cover rounded-lg cursor-pointer"
                onClick={() =>
                  navigate(
                    `/${
                      movie.contentType === "Movie" ? "movies" : "tv-shows"
                    }/${movie.title}`
                  )
                }
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TheSpotlight;
