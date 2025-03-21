/** @format */

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "./movieSlider.css";
import StarRating from "../starRating/StarRating";
import { useNavigate } from "react-router-dom";
import { instance } from "../../instance";

function MoviesSlider({ apiUrl }) {
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get(apiUrl)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, [apiUrl]);

  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      autoplay={{ delay: 5000 }}
      onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={movie.id}>
          <div
            className="movies-slider"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            }}
          >
            <div className="content">
              <motion.h1
                key={currentSlide}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {Array.from(movie.title || movie.name || "").map((char, i) => (
                  <motion.span key={i} variants={charVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <p>{movie.overview}</p>
              <span>
                <StarRating rating={movie.vote_average} />
              </span>
              <p>Release Date: {movie.release_date}</p>
            </div>

            {/* Play Button */}
            <button
              onClick={() => navigate(`/movies/details/${movie.id}`)}
              className="play-button"
              aria-label={`Play ${movie.title}`}
            >
              <i className="fa fa-play"></i>
            </button>

            <div className="poster-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || "Movie Poster"}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MoviesSlider;
