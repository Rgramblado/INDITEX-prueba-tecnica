import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 8px 16px;
  max-width: 400px;
  margin: 10px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 1px solid #e0e0e0;
  background: transparent;
  font-size: 16px;
  padding: 8px;
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

export const SearchPill = styled.div`
  background-color: #4A90E2;
  color: #333;
  border-radius: 16px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
`;
