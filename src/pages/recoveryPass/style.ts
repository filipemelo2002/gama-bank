import styled from 'styled-components';

export const RecoveryPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  img {
    position: absolute;
    top: 40px;
    left: 40px;
  }
  .recoveryPass-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    padding: 40px;

    width: 100%;
    max-width: 455px;

    background: white;
    border-radius: 15px;

    h4 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      text-align: center;
      margin-bottom: 40px;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        display: block;
        border: none;
        font-size: 14px;
        color: #878686;
        padding: 8px;
        font-weight: 500;
        text-align: left;
        width: 100%;
        border-bottom: 2px solid #878686;

        &::placeholder {
          color: #878686;
        }

        & + input {
          margin-top: 50px;
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 0;
      border-radius: 50px;
      padding: 12px 30px;
      width: 100%;
      max-width: 325px;
      text-align: left;
      transition: 0.5s;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      margin: 24px 0;
      background: #68de5a;
      transform: 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }

    a {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 500;
      color: #8c52e5;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    padding: 20px;
    img {
      position: unset;
      top: unset;
      left: unset;
      margin: 40px auto;
    }
    div.recoveryPass-div {
      margin-bottom: 40px;
      padding: 30px;
    }
  }

  @media (max-height: 425px) {
    height: 100%;

    img {
      margin: 40px auto;
      position: unset;
      top: unset;
      left: unset;
    }

    div.recoveryPass-div {
      margin-bottom: 40px;
    }
  }
`;
