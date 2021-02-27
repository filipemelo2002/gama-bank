import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

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
  background: #fbfbfb;
  margin-top: 50px;
  margin-left: 90px;
  width: 65vw;
  height: 30vh;
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

  select {
    height: 53px;
    width: 15%;
    margin-right: 25px;
    border-radius: 8px;
    border: 1px solid #9b9b9b9b;
    color: #9b9b9b9b;
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

export const SecondCard = styled.div`
  background: #fbfbfb;
  margin-top: 50px;
  margin-left: 90px;
  padding-bottom: 25px;
  width: 65vw;
  min-height: 30vh;
  border-radius: 8px;
`;

export const CardPlan = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;
