import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  width: 200px;
  align-self: center;
  border-width: 1px;
  border-style: none;
  border-color: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  background-color: var(--orange-shade);
  color: var(--bright-orange);

  :hover {
    background-color: transparent;
    border: 1px solid var(--black);
    color: var(--black);
    padding: 8px;
  }

  @media screen and (min-width: 400px) {
    padding: 8px;
  }

  @media screen and (min-width: 620px) {
    padding: 10px;
  }
`;
