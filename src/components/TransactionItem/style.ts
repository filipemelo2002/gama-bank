import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  @media (max-width: 425px) {
    padding-right: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:last-of-type {
      border-bottom: 0;
    }

    img {
      height: 20px;
      width: 20px;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Right = styled.div`
  padding-right: 0;

  @media (max-width: 425px) {
    flex: 1 0 100%;

    div {
      text-align: right;
      padding-right: 25px;
    }
  }
`;
