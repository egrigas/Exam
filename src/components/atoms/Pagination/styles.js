import styled from 'styled-components';

export const StyledPaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledPaginationButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;

  padding: 5px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;

  :hover {
    background-color: var(--black);
    color: var(--white);
    border-color: var(--white);
  }
`;
