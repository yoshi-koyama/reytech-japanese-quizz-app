import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Helmet } from 'react-helmet';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Japanese Quizz App</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
