import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListStyled = styled.ul`
  list-style: none;
`;

export const ItemStyled = styled.li`
  margin-bottom: 2px;
`;

export const LinkStyled = styled(Link)`
  color: #252525;
  text-decoration: none;
  &:hover,
  &:focus {
    color: orange;
  }
`;
