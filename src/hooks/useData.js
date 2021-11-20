import axios from "axios";

import api from "../api/api.js";

// url configuration
export const url = {
  search: (item) =>
    `${api.baseUrl}search/multi?api_key=${api.key}&query=${item}`,
  popularMovies: () =>
    `${api.baseUrl}movie/popular?api_key=${api.key}&language=en-US`,
  upcomingMovies: () =>
    `${api.baseUrl}movie/upcoming?api_key=${api.key}&language=en-US`,
  popularSeries: () =>
    `${api.baseUrl}tv/popular?api_key=${api.key}&language=en-US`,
  topRatedMovies: () =>
    `${api.baseUrl}movie/top_rated?api_key=${api.key}&language=en-US`,
  topRatedSeries: () =>
    `${api.baseUrl}tv/top_rated?api_key=${api.key}&language=en-US`,
};

// custom hook for fetch data from api
const useData = () => {
  // this function is using in the homepage and catalog pages for fetching data from api
  const submitRequest = async (link) => {
    const { data } = await axios(link);
    const { results } = data;

    if (!data) {
      console.log("error");
      return;
    }

    return results;
  };

  return {
    submitRequest,
  };
};

export default useData;
