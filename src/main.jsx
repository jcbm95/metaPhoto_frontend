import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { MetaPhotoApp } from './MetaPhotoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MetaPhotoApp />
    </BrowserRouter>
  </React.StrictMode>
);
