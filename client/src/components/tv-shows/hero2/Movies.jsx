import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Skeleton5 from "../../../util/Skeleton5";

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/tv-shows/hot-shows/"
        );
        if (response.data) {
          setShows(response.data);
        } else {
          setError("No data found");
        }
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
        <Skeleton5 />
      ) : (
        <div className="pr-6 cursor-pointer w-full h-72">
          {shows.map((show) => (
            <img
              key={show.id}
              src={show.thumbnail}
              alt={show.title}
              onClick={() =>
                navigate(
                  `/${show.contentType === "Movie" ? "movies" : "tv-shows"}/${
                    show.title
                  }`
                )
              }
              className="rounded-lg w-full h-full object-cover brightness-95 hover:brightness-110 custome-transition"
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
