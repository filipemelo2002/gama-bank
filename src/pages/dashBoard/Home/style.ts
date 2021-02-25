import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 90px;
  max-width: 90%;
  min-height: 100vh;
  header {
    display: flex;
    width: 100%;
    align-items: center;
    span {
      color: #ffffff;
      font-family: Roboto;
      font-size: 22px;
    }
    button {
      margin-left: auto;
    }
  }

  .content {
    margin-top: 40px;
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  main {
    margin-top: 40px;
    background: #fbfbfb;
    padding: 20px 35px;
    border-radius: 8px;
    min-height: 400px;

    ul {
      margin-top: 40px;
      list-style: none;
      width: 100%;

      li {
        display: flex;
        width: 100%;
        align-items: flex-start;

        div {
          margin-left: 20px;
          h3 {
            margin-bottom: 10px;
          }
          span {
            color: #9b9b9b;
            font-size: 18px;
            font-weight: 100;
          }
          p {
            font-size: 20px;
            margin-top: 10px;
          }
        }

        small {
          margin-left: auto;
          color: #9b9b9b;
          font-size: 12px;
        }
      }
    }
  }
`;

export const Card = styled.div`
  background: #fbfbfb;
  padding: 20px 35px;
  width: 400px;
  max-width: 90%;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
`;

export const CardHeader = styled.div`
  display: flex;
  h1 {
    margin-left: 20px;
    color: #9b9b9b;
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    align-self: center;
  }
`;

interface CardBodyProps {
  type?: 'default' | 'credit';
}
export const CardBody = styled.div<CardBodyProps>`
  width: 100%;
  margin-top: 36px;
  span {
    color: #9b9b9b;
    font-size: 16px;
    margin-top: 0;
  }
  h2 {
    font-size: 30px;
    margin-top: 10px;
    color: ${({ type }) => (type === 'credit' ? `#1783E7` : `#000`)};
  }

  section {
    display: flex;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
    span {
      margin-top: 0;
    }
    p {
      font-size: 30px;
      color: #68de5a;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 25px;
`;

export const Button = styled.button`
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #68de5a;
  border-radius: 50%;
  border: 0;
  transition: all 0.2s ease;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  :hover {
    transform: scale(1.1);
  }
`;
