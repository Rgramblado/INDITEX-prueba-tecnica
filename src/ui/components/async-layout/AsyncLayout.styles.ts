import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-bottom: 5px solid #3498db;
  border-left: 5px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  height: 100vh;
`;
