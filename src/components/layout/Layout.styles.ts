import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 24px;
  color: #4A90E2;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
`;
