import styled from 'styled-components';
import bgImage from '../../img/happy.png';
import bgApp1 from '../../img/app-bg1.png';
import bgApp2 from '../../img/app-bg2.png';
import bgComplexity from '../../img/complexity-bg.png';

export const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: #8c52e5;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: auto;

  height: 100vh;
  img {
    position: absolute;
    top: 40px;
    left: 40px;
  }

  .middle-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 80px;
    .access-div {
      flex: 0;
      color: white;
      font-size: 1.25rem;
      h2 {
        font-size: 1.875rem;
        font-weight: normal;
        margin-bottom: 25px;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border: 0;
        border-radius: 100px;
        padding: 15px 30px;
        width: 250px;
        text-align: left;
        transition: 0.5s;
        color: #8c52e5;
        font-size: 1.125rem;
        font-weight: 500;
        background: #fff;
        &:hover {
          background: #68de5a;
        }
      }
    }
    .signup-div {
      background: white;
      border-radius: 15px;
      padding: 40px;
      flex: 0;

      h4 {
        font-size: 1.5rem;
        font-weight: 500;
      }

      form {
        input {
          border: 0;
          font-size: 1rem;
          padding: 8px;
          font-weight: 500;
          text-align: left;
          width: 100%;
          color: #878686;
          margin: 32px 0 0;
          border-bottom: 2px solid #878686;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border: 0;
        border-radius: 100px;
        padding: 15px 30px;
        width: 325px;
        text-align: left;
        transition: 0.5s;
        color: #9b9b9b;
        font-size: 1.125rem;
        font-weight: 500;
        background: #d8d8d8;
        margin: 32px 0 0;
        &:hover {
          background: #68de5a;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 100%;

    background: unset;

    img {
      left: 50%;
      transform: translateX(-50%);
    }

    .middle-div {
      flex-direction: column;
      margin-top: 145px;

      .access-div {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
      }

      .signup-div {
        form {
          display: flex;
          flex-direction: column;
          align-items: center;

          button {
            width: 100%;
            min-width: 300px;
            max-width: 325px;
          }
        }
      }
    }
  }
`;

export const InfoPage = styled.section`
  width: 100%;
  height: 100vh;
  background: #eaeaea;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 60px;

  div {
    width: 100%;
    height: 100%;
    display: flex;
  }

  section.left {
    flex: 1;
    background: #000 url(${bgApp1}) no-repeat left center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 30px 80px 107px;

    h2 {
      font-size: 2.125rem;
      color: #68de5a;
      font-weight: 500;
    }

    div {
      height: fit-content;
      display: block;
    }

    p {
      font-size: 1.25rem;
      color: #68de5a;
      font-weight: 400;
    }
  }

  section.right {
    flex: 1;
    background: #f8f8f8 url(${bgApp2}) no-repeat 20% center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 0 80px 107px;

    h2 {
      font-size: 2.125rem;
      color: #1d1d1d;
      font-weight: 500;
    }

    div {
      height: fit-content;
      display: block;
    }

    p {
      font-size: 1.25rem;
      color: #1d1d1d;
      font-weight: 400;
    }
  }

  @media (max-width: 1366px) {
    section.left {
      padding: 20px 60px;
      background-size: 60%;
    }
    section.right {
      padding: 20px 60px;
      background-size: 40%;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    padding: 30px;

    div {
      flex-direction: column;
    }

    section.left {
      text-align: center;
      min-height: calc(100vh - 30px);
      padding: 20px;
      background-size: 70%;
    }
    section.right {
      text-align: center;
      min-height: calc(100vh - 30px);
      padding: 20px;
      margin-top: 30px;
      background-size: 40%;
      background-position: center center;
    }
  }

  @media (max-width: 425px) {
    section.left {
      background-size: 98%;
    }
    section.right {
      background-size: 80%;
    }
  }
`;

export const AnnuityPage = styled.section`
  width: 100%;
  height: 100vh;

  padding: 0 170px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    color: #fff;
    max-width: 460px;

    h2 {
      font-size: 2.625rem;
      font-weight: 700;
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-top: 36px;
    }
  }

  span {
    font-size: 11.63rem;
    font-weight: 500;
    color: #68de5a;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    padding: 30px;

    div {
      max-width: max-content;
      text-align: center;

      h4 {
        margin-top: 16px;
      }
    }
  }
`;

export const ComplexityPage = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${bgComplexity}) no-repeat center center, #68de5a;
  background-size: cover;

  padding: 0 170px;

  display: flex;
  align-items: center;
  justify-content: start;

  div {
    color: #fff;
    max-width: 460px;

    h2 {
      font-size: 2.625rem;
      font-weight: 700;
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-top: 36px;
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 425px) {
    div {
      text-align: center;
    }
  }
`;

export const InvitePage = styled.section`
  width: 100%;
  height: 100vh;
  background: #eaeaea;

  padding: 0 170px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    color: #000;
    max-width: 460px;

    h2 {
      font-size: 2.625rem;
      font-weight: 700;
    }

    p {
      font-size: 0.875rem;
      font-weight: 300;
      margin-top: 16px;
    }

    img {
      object-fit: contain;
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    div {
      text-align: center;
    }

    img {
      width: 30%;
      height: auto;
    }
  }
`;
