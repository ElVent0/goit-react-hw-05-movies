import { Outlet, useParams, useLocation } from 'react-router-dom';
import { ContainerStyled } from '../../components/ContainerStyled.styled';
import { fetchedListById } from '../../api/api';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
import {
  AdditionalContent,
  Paragraph,
  ListStyled,
  ItemStyled,
  LinkStyled,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log('dofjgndfgnldfgm', movieId);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchedListById(movieId);
        if (data) {
          setMovieData(data);
        }
        console.log(5555, data);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [movieId]);

  return (
    <ContainerStyled>
      {movieData && <MovieDescription movieData={movieData} />}
      <AdditionalContent>
        <Paragraph>Additional information</Paragraph>
        <ListStyled>
          <ItemStyled>
            <LinkStyled to="cast" state={{ from: location.state?.from ?? '/' }}>
              Cast
            </LinkStyled>
          </ItemStyled>
          <ItemStyled>
            <LinkStyled
              to="reviews"
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </LinkStyled>
          </ItemStyled>
        </ListStyled>
      </AdditionalContent>
      <Outlet context={movieId} />
    </ContainerStyled>
  );
};

export default MovieDetails;

// Це сторінка -------------------------------------------
