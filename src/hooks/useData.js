import { useState } from "react";
import axios from "axios";

export const api = {
  baseUrl: "https://api.themoviedb.org/3/",
  key: "12a8a34f7770ec8f55d92a5f438fc87e",
  images: (path) => `https://image.tmdb.org/t/p/original/${path}`,
  w500images: (path) => `https://image.tmdb.org/t/p/w500/${path}`,
};

export const url = {
  search: (movie) =>
    `${api.baseUrl}search/multi?api_key=${api.key}&query=${movie}`,
  movies: () => `${api.baseUrl}movie/popular?api_key=${api.key}&language=en-US`,
  series: () => `${api.baseUrl}tv/popular?api_key=${api.key}&language=en-US`,
};

const useData = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  // movies
  const getMovies = async () => {
    const { data } = await axios(url.movies());
    const { results } = data;

    setMovies(results);
  };

  const getSeries = async () => {
    const { data } = await axios(url.series());
    const { results } = data;

    setSeries(results);
  };

  return { movies, series, getMovies, getSeries };
};

export default useData;
