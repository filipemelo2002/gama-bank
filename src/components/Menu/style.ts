import { Link as a } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.aside`
  position: absolute;
  left: 0;
  min-height: 100vh;
  width: 10rem;
  background: #68de5a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  img {
    width: 125px;
    height: 125px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    .option {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      background: rgb(140, 82, 229);
      width: 100%;
      max-width: 100px;
      height: 100px;
      padding: 12px;
      border-radius: 5px;
      transition: all 0.1s ease-in;

      img {
        width: 28px;
        height: 28px;
      }

      span {
        font-size: 0.875rem;
        color: #fff;
        margin-top: auto;
      }
      &:hover {
        transform: scale(1.1);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
      }
    }
  }

  @media (max-width: 768px) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    bottom: 0;
    width: 100%;
    height: fit-content;
    min-height: unset;
    flex-direction: row;
    padding-top: 0;

    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.7);

    div {
      width: 100%;
      height: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

      .option {
        height: fit-content;
        align-items: center;
        margin-top: 0;
        margin-bottom: 1rem;
        background: unset;

        span {
          margin-top: 10px;
          font-weight: 600;
        }

        &:hover {
          transform: none;
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;

          filter: contrast(0%);
        }
      }
    }
  }

  @media (max-width: 375px) {
    div {
      .option {
        padding: 6px;
      }
    }
  }
`;

export const Link = styled(a)`
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`;
