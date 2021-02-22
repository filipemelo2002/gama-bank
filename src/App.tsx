import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style/global';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </Provider>
  );
};

export default App;
