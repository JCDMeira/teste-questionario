/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ShowAttempt({ setPage, data: { numberOfQuestions } }) {
  return (
    <div>
      <h1>show: {numberOfQuestions}</h1>
      <button onClick={() => setPage('Home')}>voltar</button>
    </div>
  );
}

export { ShowAttempt };
