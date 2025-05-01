import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { LikesProvider } from './context/LikesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LikesProvider>
      <Router />
    </LikesProvider>
  </BrowserRouter>
);
