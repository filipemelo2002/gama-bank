import styled, { css } from 'styled-components';

export const Dashboard = styled.div`
  background-color: #8c52e5;
  height: 100vh;

  aside {
    position: absolute;
    width: 151px;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: #68de5a;
  }

  img {
    position: absolute;
    width: 125px;
    height: 125px;
    left: 13px;
    top: 20px;
  }

  .menu {
    height: 100vh;
  }

  .depositos {
    top: 170px;
  }

  .planos {
    top: 286px;
  }

  .pagamentos {
    top: 402px;
    span {
      padding-left: 6px;
    }
  }

  .transações {
    top: 518px;
    span {
      padding-left: 8px;
    }
  }

  .icon {
    color: #fff;
    color: #fff;
    display: flex;
    flex-direction: row;
    font-size: 30px;
    text-align: center;
    margin-left: 32px;
    margin-top: 20px;
    margin-bottom: -35px;
  }
`;

export const Button = styled.div`
  position: absolute;
  width: 91px;
  height: 91px;
  left: 30px;

  background: #8c52e5;
  border-radius: 5px;

  span {
    width: 63px;
    height: 16px;
    padding-left: 12px;
    padding-top: 65px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`;
