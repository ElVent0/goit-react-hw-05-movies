import { Outlet, useParams } from 'react-router-dom';
import { ContainerStyled } from '../ContainerStyled.styled';
import { fetchedListById } from '../../api/api';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchedListById(movieId);
        setMovieData(data);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [movieId]);

  return (
    <ContainerStyled>
      <div>Movie Details</div>
      <Outlet />
    </ContainerStyled>
  );
};

export default MovieDetails;
