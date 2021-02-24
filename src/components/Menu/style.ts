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
      background: linear-gradient(
        128deg,
        rgba(140, 82, 229, 1) 0%,
        rgba(55, 0, 142, 1) 100%
      );
      width: 100px;
      height: 100px;
      padding: 12px;
      border-radius: 5px;
      transition: all 0.1s ease-in;

      img {
        width: 28px;
        height: 28px;
      }

      span {
        font-size: 14px;
        color: #fff;
        margin-top: auto;
      }
      :hover {
        transform: scale(1.1);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
      }
    }
  }
`;

export const Link = styled(a)`
  text-decoration: none;
`;
