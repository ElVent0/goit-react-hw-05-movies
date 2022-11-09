import { Outlet } from 'react-router-dom';
import {
  LayoutStyled,
  ListStyled,
  ItemStyled,
  LinkStyled,
} from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <LayoutStyled>
        <ListStyled>
          <ItemStyled>
            <LinkStyled to="/" end>
              Home
            </LinkStyled>
          </ItemStyled>
          <ItemStyled>
            <LinkStyled to="/movies">Movies</LinkStyled>
          </ItemStyled>
        </ListStyled>
      </LayoutStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
