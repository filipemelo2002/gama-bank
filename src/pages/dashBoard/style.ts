import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
`;
export const Content = styled.div`
  margin-left: 10rem;
  overflow-y: auto;
  height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-bottom: 100px;
  }
`;
