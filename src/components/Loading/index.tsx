import React from 'react';
import ReactLoading from 'react-loading';
import { Container } from './style';

interface LoadingProps {
  isVisible: boolean;
}

const Loading: React.FC<LoadingProps> = props => {
  return (
    <Container style={!props.isVisible ? { display: 'none' } : {}}>
      <span>Carregando</span>
      <ReactLoading type="spin" color="#000" width={'40%'} height={'40%'} />
    </Container>
  );
};

export default Loading;
