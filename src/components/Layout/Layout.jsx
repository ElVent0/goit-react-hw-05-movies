import { Outlet } from 'react-router-dom';
import {
  LayoutStyled,
  ListStyled,
  ItemStyled,
  LinkStyled,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <LayoutStyled>
        <ListStyled>
          <ItemStyled>
            <LinkStyled to="/">Home</LinkStyled>
          </ItemStyled>
          <ItemStyled>
            <LinkStyled to="/movies">Movies</LinkStyled>
          </ItemStyled>
        </ListStyled>
      </LayoutStyled>
      <Outlet />
    </>
  );
};

export default Layout;
