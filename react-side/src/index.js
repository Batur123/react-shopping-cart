import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from "./main_menu/main_page";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);