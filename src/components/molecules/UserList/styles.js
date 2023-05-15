import styled from 'styled-components';

export const StyledUserListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledUserCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;

  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  @media screen and (min-width: 600px) {
    gap: 10px;
  }
`;

export const StyledUserNumber = styled.div`
  width: 5%;
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 600px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;

export const StyledUserName = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  text-align: left;
  font-weight: 600;

  @media screen and (min-width: 600px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;

export const StyledUserEmail = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  text-align: left;

  @media screen and (min-width: 600px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;

export const StyledUserAge = styled.div`
  width: 5%;
  display: none;

  @media screen and (min-width: 600px) {
    display: flex;
    font-size: 18px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;

export const StyledUserCardButtons = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin: 5px;
`;
