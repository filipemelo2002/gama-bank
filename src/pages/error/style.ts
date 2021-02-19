import styled from 'styled-components';

export const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    top: 40px;
    left: 40px;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;

  max-width: 455px;
  background: #fbfbfb;
  border-radius: 8px;

  svg {
    margin-bottom: 16px;
  }

  p {
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: none;
    border-radius: 50px;
    padding: 12px 30px;
    width: 325px;
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

    svg {
      margin: 0;
    }
  }
`;
