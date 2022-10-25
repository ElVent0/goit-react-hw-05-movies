import { ListStyled, ItemStyled, LinkStyled } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ data }) => {
  console.log(data);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <ListStyled>
      {data &&
        data.map(item => {
          const linkForHome = `movies/${item.id}`;
          const linkForMovies = `${item.id}`;
          // console.log(item);
          console.log(location.pathname);

          return (
            <ItemStyled key={item.id}>
              {location.pathname === '/' && (
                <LinkStyled to={linkForHome} state={{ from: location }}>
                  {item.original_title}
                </LinkStyled>
              )}
              {location.pathname === '/movies' && (
                <LinkStyled to={linkForMovies} state={{ from: location }}>
                  {item.original_title}
                </LinkStyled>
              )}
            </ItemStyled>
          );
        })}
    </ListStyled>
  );
};

export default MoviesList;
