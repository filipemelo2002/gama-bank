import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  padding-right: 50px;

  div:first-of-type {
    margin-left: 23px;

    strong:first-of-type {
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 5px;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      color: #9b9b9b;
    }

    strong:last-of-type {
      font-size: 20px;
      line-height: 40px;
      margin-top: 15px;
    }
  }

  div:last-of-type {
    span {
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      color: #9b9b9b;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Right = styled.div`
  align-self: center;
`;
