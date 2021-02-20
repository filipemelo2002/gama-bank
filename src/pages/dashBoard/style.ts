import styled, { css } from 'styled-components';

export const Dashboard = styled.div`
  background-color: #8c52e5;
  height: 900px;

  aside {
    position: absolute;
    width: 151px;
    height: 900px;
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
    height: 900px;
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
    display: flex;
    flex-direction: row;
    font-size: 30px;
    text-align: center;
    margin-left: 32px;
    margin-top: 20px;
    margin-bottom: -35px;
  }

  .credito {
    left: 747.2px;
  }

  .lançamentos {
    width: 907.55px;
    height: 396px;
    left: 247.45px;
    top: 450px;
  }

  .bem-vindo {
    position: absolute;
    width: 280px;
    height: 26px;
    left: 243px;
    top: 71px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #ffffff;
  }

  .exibicao {
    position: absolute;
    width: 47px;
    height: 47px;
    left: 1108px;
    top: 61px;
    border-radius: 100px;

    background: #68de5a;
  }

  .icon-eye {
    position: absolute;
    text-align: center;
    font-size: 30px;
    margin-top: 8px;
    margin-left: 9px;
    color: #8c52e5;
    cursor: pointer;

    background: #68de5a;
  }
`;

export const Option = styled.div`
  position: absolute;
  width: 91px;
  height: 91px;
  left: 30px;

  background: #8c52e5;
  border-radius: 5px;
  cursor: pointer;

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

export const Card = styled.div`
  position: absolute;
  width: 407.8px;
  height: 255.05px;
  left: 243px;
  top: 145px;

  background: #fbfbfb;
  border-radius: 8px;
`;

export const CardTitle = styled.div`
  position: absolute;
  margin-top: 25px;
  margin-left: 41px;
  font-family: Roboto;
  font-size: 38px;
  line-height: 25px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #9b9b9b;

  p {
    margin-right: 260px;
    margin-left: 10px;
    font-size: 28px;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  margin-left: 41px;
  margin-top: 100px;

  font-family: Roboto;
  font-size: 16px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #9b9b9b;

  .saldo {
    position: absolute;
    margin-top: 70px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    align-items: center;
    color: #010101;
  }

  .saldo-credito {
    color: #1783e7;
  }

  .titulo {
    position: absolute;
    margin-top: 189px;
  }

  .transacoes {
    position: absolute;
    margin-top: 187px;
    margin-left: 150px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #68de5a;
  }

  .compras {
    position: absolute;
    width: 128px;
    height: 19px;
    margin-top: 30px;
    margin-left: 50px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    display: flex;
    align-items: center;
    text-align: center;
    color: #010101;
  }

  .data-compras {
    margin-left: 740px;
    color: #9b9b9b;
  }

  .tipo-compra {
    color: #9b9b9b;
    margin-top: 80px;
    font-size: 18px;
  }

  .valor-compra {
    color: #010101;
    margin-top: 130px;
    font-size: 20px;
  }

  .icon-compras {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0.05%;
    bottom: 0.05%;
    font-size: 40px;
  }
`;
