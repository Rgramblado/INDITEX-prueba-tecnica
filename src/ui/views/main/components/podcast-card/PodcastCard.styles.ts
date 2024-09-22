import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PodcastCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 33px 16px 16px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 50px 0 0 0;
  width: 200px;
  position: relative;
  align-items: center;
`;

export const PodcastImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 12px;
  position: absolute;
  top: -50px;
  left: 75px;

`;

export const PodcastTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const PodcastAuthor = styled.p`
  font-size: 14px;
  color: #666;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
