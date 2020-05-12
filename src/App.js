import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
      <Header />
    </BrowserRouter>
  );
}

export default App;
