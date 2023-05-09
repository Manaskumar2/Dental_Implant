import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ScrollToTop } from './components/ComponentExport';




ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop/>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root')
);
