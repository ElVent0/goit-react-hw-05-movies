import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LayoutStyled = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 60px;
  box-shadow: 1px 13px 79px -26px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 1px 13px 79px -26px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 1px 13px 79px -26px rgba(0, 0, 0, 0.8);
`;

export const ListStyled = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;
export const ItemStyled = styled.li``;

export const LinkStyled = styled(NavLink)`
  color: #252525;
  text-decoration: none;
  font-size: 24px;
  transition: 0.3s;
  &.active {
    color: orange;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #9d6600;
  }
`;
