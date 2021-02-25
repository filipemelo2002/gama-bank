import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  margin-left: 40px;

  div {
    margin-left: 25px;

    strong {
      font-size: 18px;
      line-height: 18.75px;
      font-weight: bolder;
    }
    p {
      margin-top: 5px;
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;
      color: #9b9b9b;
    }
  }
`;
