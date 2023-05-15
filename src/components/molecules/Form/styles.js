import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
`;
