import { Outlet, useParams } from 'react-router-dom';
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
import { Suspense } from 'react';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
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
    <Suspense fallback={<div>Loading...</div>}>
      <ContainerStyled>
        {movieData && <MovieDescription movieData={movieData} />}
        <AdditionalContent>
          <Paragraph>Additional information</Paragraph>
          <ListStyled>
            <ItemStyled>
              <LinkStyled to="cast">Cast</LinkStyled>
            </ItemStyled>
            <ItemStyled>
              <LinkStyled to="reviews">Reviews</LinkStyled>
            </ItemStyled>
          </ListStyled>
        </AdditionalContent>
        <Outlet context={movieId} />
      </ContainerStyled>
    </Suspense>
  );
};

export default MovieDetails;

// Це сторінка -------------------------------------------
