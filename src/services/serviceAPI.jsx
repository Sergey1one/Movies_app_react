import axios from 'axios'

    const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '318e5d2ffa793e5dfb0eb3b71e57bd83';
    const Options =new URLSearchParams ({
        api_key: API_KEY,
    
});

export const getMovieById = async (id) => {
    // https://api.themoviedb.org/3/movie/{movie_id}
    const { data } = await axios.get(`${BASE_URL}/movie/${id}?${Options}`)
    return data
}

export const getMovieCast = async (id) => {
    // https://api.themoviedb.org/3/movie/{movie_id}/credits
    const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits?${Options}`)
    return data
}

export const getMovieReviews = async (id) => {
    // https://api.themoviedb.org/3/movie/{movie_id}/credits
    const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews?${Options}`)
    return data
}

   export const getTrendingMovies = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/week?${Options}&page=${page}`);

  return data;
};


export const getMovieByName = async (name) => {
    // https://api.themoviedb.org/3/search/movie
    // ${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}
    const { data } = await axios.get(`${BASE_URL}/search/movie?${Options}&query=${name}`)
    return data.results
}
