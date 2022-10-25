import { Navigate, Routes, Route } from 'react-router-dom';
// import Movies from '../pages/Movies/Movies';
// import Home from '../pages/Home/Home';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import Layout from './Layout/Layout';
import { lazy } from 'react';
// import { Suspense } from 'react';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
// const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <Routes>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
      {/* </Suspense> */}
    </Routes>
  );
};

// https://api.themoviedb.org/3/movie/550?api_key=fb7a043e75a81b4c13aa0d0fbcb0f101
