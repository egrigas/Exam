import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  i {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  input {
    padding-left: 30px;
  }

  @media screen and (min-width: 400px) {
    align-items: center;

    input {
      width: 100%;
      padding-left: 50px;
    }

    i {
      left: 20px;
    }
  }

  @media screen and (min-width: 650px) {
    input {
      width: 100%;
    }

    i {
      left: 20px;
    }
  }
`;

export const StyledInput = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: none;

  @media screen and (min-width: 400px) {
    align-items: center;

    input {
      width: 100%;
    }

    i {
      left: 20px;
    }
  }

  @media screen and (min-width: 650px) {
    input {
      width: 100%;
    }

    i {
      left: 20px;
    }
  }
`;
