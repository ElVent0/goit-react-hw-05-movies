export const fetchedList = async () => {
  const API_LINK =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=fb7a043e75a81b4c13aa0d0fbcb0f101';

  const movies = await fetch(API_LINK);
  const parsedMovies = await movies.json();
  //   console.log(parsedMovies);
  return parsedMovies;
};

export const fetchedListByName = async name => {
  const API_LINK = `https://api.themoviedb.org/3/search/movie?api_key=fb7a043e75a81b4c13aa0d0fbcb0f101&language=en-US&query=${name}&page=1&include_adult=false`;

  const movies = await fetch(API_LINK);
  const parsedMovies = await movies.json();
  //   console.log(parsedMovies);
  return parsedMovies;
};

export const fetchedListById = async id => {
  const API_LINK = `https://api.themoviedb.org/3/movie/${id}?api_key=fb7a043e75a81b4c13aa0d0fbcb0f101&language=en-US`;

  const movies = await fetch(API_LINK);
  const parsedMovies = await movies.json();
  //   console.log(parsedMovies);
  return parsedMovies;
};

export const fetchedListOfCast = async id => {
  console.log('id', id);
  const API_LINK = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fb7a043e75a81b4c13aa0d0fbcb0f101&language=en-US`;

  const movies = await fetch(API_LINK);
  const parsedMovies = await movies.json();
  console.log('data', parsedMovies);
  return parsedMovies;
};

export const fetchedListOfReviews = async id => {
  const API_LINK = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=fb7a043e75a81b4c13aa0d0fbcb0f101&language=en-US`;

  const movies = await fetch(API_LINK);
  const parsedMovies = await movies.json();
  //   console.log(parsedMovies);
  return parsedMovies;
};
