import styled from 'styled-components';

export const StyledHomePage = styled.main`
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-color: var(--off-white);
  margin: 0 auto;

  @media screen and (min-width: 1000px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1000px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;
