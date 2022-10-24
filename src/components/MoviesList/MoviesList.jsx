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
          const linkForNavLink = () => {
            if (location.pathname === '/movies') {
              return `%${item.id}}`;
            } else if (location.pathname === '/') {
              return `movies/%${item.id}`;
            }
          };
          // linkForNavLink();

          return (
            <ItemStyled key={item.id}>
              <LinkStyled to={linkForNavLink()}>
                {item.original_title}
              </LinkStyled>
            </ItemStyled>
          );
        })}
    </ListStyled>
  );
};

export default MoviesList;
