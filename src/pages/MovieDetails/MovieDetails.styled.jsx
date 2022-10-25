import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AdditionalContent = styled.div`
  padding: 20px 0;
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
`;

export const ListStyled = styled.ul`
  list-style: none;
`;

export const ItemStyled = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const LinkStyled = styled(NavLink)`
  color: #252525;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
