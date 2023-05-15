import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0px 20px;
  background-color: var(--black);

  p {
    cursor: pointer;
    font-size: 1, 25rem;
    font-weight: 600;
    color: var(--perl);
  }

  @media screen and (min-width: 600px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const StyledHeaderContainer = styled.div`
  max-width: 62.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: var(--orange-shade);
`;
