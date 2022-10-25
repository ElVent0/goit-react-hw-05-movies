import {
  BackLink,
  Content,
  Poster,
  TextContent,
  Title,
  SubTitle,
  Paragraph,
} from './MovieDescription.styled';
import { useLocation } from 'react-router-dom';

const MovieDescription = ({ movieData }) => {
  console.log(movieData);
  const imageSrc = `https://image.tmdb.org/t/p/w200${movieData.poster_path}`;
  const movieRating = Math.round(movieData.vote_average * 10);
  const location = useLocation();

  return (
    <>
      <BackLink type="button" to={location.state?.from ?? '/'}>
        Go back
      </BackLink>

      <Content>
        <Poster
          src={imageSrc}
          alt={new Date(movieData.release_date).getFullYear()}
          width="300"
        />
        <TextContent>
          <Title>
            {movieData.title} ({new Date(movieData.release_date).getFullYear()})
          </Title>
          <Paragraph>User score : {movieRating}%</Paragraph>
          <SubTitle>Overview</SubTitle>
          <Paragraph>{movieData.overview}</Paragraph>
          <SubTitle>Genres</SubTitle>
          <Paragraph>
            {movieData.genres
              .map(item => {
                return item.name.trim();
              })
              .join(' ')}
          </Paragraph>
        </TextContent>
      </Content>
    </>
  );
};

export default MovieDescription;
