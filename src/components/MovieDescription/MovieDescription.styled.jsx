import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: block;
  border: 1px solid #252525;
  border-radius: 5px;
  background-color: #fff;
  color: #252525;
  text-decoration: none;
  text-align: center;
  width: 100px;
  height: 26px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  padding-bottom: 40px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 2px;
    /* border-top: 1px solid black; */
    /* z-index: -1; */
    background-color: #cfcfcf;
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
`;

export const TextContent = styled.div`
  padding-left: 40px;
`;

export const Title = styled.h1`
  color: #252525;
  font-size: 32px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  color: #252525;
  font-size: 26px;
`;

export const Paragraph = styled.p`
  color: #252525;
  font-size: 16px;
`;
