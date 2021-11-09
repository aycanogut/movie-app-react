import apiCall from "./apiCall";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  on_the_air: "on_the_air",
};

const tmdApi = {
  getMoviesList: (type, params) => {
    const url = `movie/${movieType[type]}`;
    return apiCall.get(url, params);
  },
  getTvlist: (type, params) => {
    const url = `tv/${movieType[type]}`;
    return apiCall.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = `${category[cate]}/${id}/videos`;
    return apiCall.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = `search/${category[cate]}`;
    return apiCall.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = `${category[cate]}/${id}/`;
    return apiCall.get(url, params);
  },
  credits: (cate, id) => {
    const url = `${category[cate]}/${id}/credits`;
    return apiCall.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = `${category[cate]}/${id}/similar`;
    return apiCall.get(url, { params: {} });
  },
};

export default tmdApi;
