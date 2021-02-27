import styled from 'styled-components';

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
