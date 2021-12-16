import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { QuestionsProvider } from './Contexts/questionsContext.js';

ReactDOM.render(
  <React.StrictMode>
    <QuestionsProvider>
      <App />
    </QuestionsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
