import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 90px;
  width: 100%;
  min-height: 100vh;
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 910px;
    align-items: center;
    span {
      color: #ffffff;
      font-family: Roboto;
      font-size: 1.375rem;
    }
    div {
      display: flex;
    }
    button {
      margin-left: auto;
    }
  }

  .content {
    margin-top: 40px;
    display: flex;
    width: 100%;
    max-width: 910px;
    align-items: center;
    justify-content: space-between;
  }

  main {
    margin-top: 40px;
    background: #fbfbfb;
    padding: 20px 35px;
    border-radius: 8px;
    min-height: 400px;
    width: 100%;
    max-width: 910px;
  }

  @media (max-width: 1024px) {
    .content {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    padding: 70px 40px 90px;
  }

  @media (max-width: 425px) {
    padding: 70px 20px;
    main {
      padding: 20px 10px;
    }
  }

  @media (max-width: 375px) {
    padding: 40px 10px;
  }
`;

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background: #fbfbfb;
  padding: 20px 35px;
  width: 100%;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.24);
  & + div {
    margin-left: 40px;
  }

  @media (max-width: 1024px) {
    & + div {
      margin-top: 40px;
      margin-left: 0;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  h1 {
    margin-left: 20px;
    color: #9b9b9b;
    font-family: Roboto;
    font-weight: 400;
    font-size: 1rem;
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
    font-size: 1rem;
    margin-top: 0;
  }
  h2 {
    font-size: 1.875rem;
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
      flex: 1;
    }
    p {
      font-size: 1.875rem;
      color: #68de5a;
    }
  }

  @media (max-width: 768px) {
    section {
      flex-direction: column;
      align-items: flex-start;
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
  margin-right: 20px;
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

interface BoxVisibilityProps {
  type?: 'default' | 'credit';
  isVisible: boolean;
}

export const BoxVisibility = styled.div<BoxVisibilityProps>`
  ${({ isVisible }) =>
    isVisible &&
    css`
      margin-top: 10px;
      width: 100%;
      height: 2.25rem;
      background: rgba(0, 0, 0, 0.05);
      & * {
        display: none;
      }
    `}
`;
