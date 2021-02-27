import styled from 'styled-components';
import { Link as a } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 910px;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 90px;

  header {
    display: flex;
    width: 100%;
    max-width: 910px;
    align-items: center;
    span {
      color: #ffffff;
      font-family: Roboto;
      font-size: 1.375rem;
    }
    a {
      margin-left: auto;
    }
  }

  span {
    color: #ffffff;
    font-family: Roboto;
    font-size: 22px;
  }

  @media (max-width: 768px) {
    padding: 70px 40px 90px;
  }

  @media (max-width: 425px) {
    padding: 70px 20px;
  }

  @media (max-width: 375px) {
    padding: 40px 10px;
  }
`;

export const FirstCard = styled.div`
  background: #fbfbfb;
  margin-top: 50px;
  width: 100%;
  border-radius: 8px;

  input {
    height: 53px;
    width: 100%;
    max-width: 50%;
    padding-left: 15px;
    margin-right: 25px;
    border: 1px solid #9b9b9b9b;
    border-radius: 8px;

    ::placeholder {
      color: #9b9b9b9b;
    }
  }

  select {
    height: 53px;
    width: 100%;
    max-width: 20%;
    margin-right: 25px;
    border-radius: 8px;
    border: 1px solid #9b9b9b9b;
    color: #9b9b9b9b;
  }

  button {
    width: 100%;
    max-width: 20%;
    background: #68de5a;
    color: #ffffff;
    border: 1px solid #9b9b9b9b;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    input {
      flex: 1;
      width: auto;
      max-width: unset;
    }

    select {
      flex: 1;
      width: auto;
      margin-right: 0;
      max-width: unset;
    }

    button {
      flex: 1 0 100%;
      max-width: 100%;
      margin-top: 15px;
      padding: 8px 0;
    }
  }

  @media (max-width: 425px) {
    input {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 40px;
  h1 {
    margin-left: 20px;
    color: #9b9b9b;
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    align-self: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 40px;
`;

export const SecondCard = styled.div`
  background: #fbfbfb;
  margin-top: 50px;
  overflow: hidden;
  padding-bottom: 25px;
  min-height: 30vh;
  border-radius: 8px;
`;

export const CardPlan = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Link = styled(a)`
  text-decoration: none;

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

  svg {
    margin: 10px 12px;
  }
`;
