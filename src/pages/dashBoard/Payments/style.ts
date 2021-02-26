import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #ffffff;
    font-family: Roboto;
    font-size: 22px;
    margin-top: 70px;
    margin-left: 90px;
  }
`;

export const Card = styled.div`
  background: #fbfbfb;
  margin-top: 50px;
  margin-left: 90px;
  width: 65vw;
  height: 40vh;
  border-radius: 8px;

  input {
    height: 53px;
    width: 50%;
    margin-right: 25px;
    border: 1px solid #9b9b9b9b;
    border-radius: 8px;

    ::placeholder {
      padding-left: 10px;
      color: #9b9b9b9b;
    }
  }

  button {
    width: 15%;
    background: #68de5a;
    color: #ffffff;
    border: 1px solid #9b9b9b9b;
    border-radius: 8px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 40px;
  h1 {
    margin-left: 20px;
    color: #9b9b9b;
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    align-self: center;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 25px;
`;
