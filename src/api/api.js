// configuration for themoviedb api

const api = {
  baseUrl: "https://api.themoviedb.org/3/",
  key: "12a8a34f7770ec8f55d92a5f438fc87e",
  images: (path) => `https://image.tmdb.org/t/p/original/${path}`,
  w500images: (path) => `https://image.tmdb.org/t/p/w500/${path}`,
};

export default api;
