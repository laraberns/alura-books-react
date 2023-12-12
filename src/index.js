import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home';
import Header from './componentes/Header/index';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Favoritos from './rotas/Favoritos';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100vw;
  padding: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li {
  list-style-type: none;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/favoritos' element={<Favoritos/>}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)