import styled from 'styled-components';

export const StyledBox = styled.div`
  max-width: 60rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;

  background-color: var(--bright-orange);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (min-width: 1000px) {
    padding: 1.25rem 2rem;
  }
`;
