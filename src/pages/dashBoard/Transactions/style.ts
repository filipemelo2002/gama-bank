import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  header {
    margin-top: 70px;
    margin-left: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65vw;

    span {
      color: #ffffff;
      font-family: Roboto;
      font-size: 22px;
    }
  }
`;

export const FirstCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fbfbfb;
  margin-top: 50px;
  margin-left: 90px;
  padding-left: 40px;
  width: 65vw;
  height: 15vh;
  border-radius: 8px;

  h1 {
    margin-left: 20px;
    color: #9b9b9b;
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    margin-right: 25px;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      height: 53px;
      width: 45%;
      margin-right: 25px;
      border: 1px solid #9b9b9b9b;
      border-radius: 8px;

      ::placeholder {
        padding-left: 10px;
        color: #9b9b9b9b;
      }
    }

    p {
      color: #9b9b9b;
      font-family: Roboto;
      font-weight: 400;
      font-size: 16px;
      margin-right: 25px;
    }

    button {
      height: 53px;
      width: 30%;
      background: #68de5a;
      color: #ffffff;
      border: 1px solid #9b9b9b9b;
      border-radius: 8px;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-left: 20px;
    color: #9b9b9b;
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const SecondCard = styled.div`
  background: #fbfbfb;
  margin-top: 50px;
  margin-left: 90px;
  padding-top: 20px;
  padding-left: 40px;
  padding-bottom: 25px;
  width: 65vw;
  min-height: 30vh;
  border-radius: 8px;
`;
