import MoviesList from '../../components/MoviesList/MoviesList';
import { TilteStyled } from './Home.styled';
import { ContainerStyled } from '../../components/ContainerStyled.styled';
import { useState, useEffect } from 'react';
import { fetchedList } from '../../api/api';
import { Suspense } from 'react';

const Home = () => {
  const [moviesArray, setMoviesArray] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchedList();
        setMoviesArray(data.results);
        // console.log(data.results);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ContainerStyled>
          <TilteStyled>Trending today</TilteStyled>
          <MoviesList data={moviesArray} />
        </ContainerStyled>
      </Suspense>
    </>
  );
};

export default Home;
