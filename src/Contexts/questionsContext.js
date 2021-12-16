import React, { createContext, useContext, useState, useEffect } from 'react';
import P from 'prop-types';

import { api } from '../services/api';

const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    api.get(`/api.php?amount=${numberOfQuestions}`).then((response) => {
      console.log(response.data.results);
      setQuestions(response.data.results);
    });
  }, [numberOfQuestions]);

  return (
    <QuestionsContext.Provider
      value={{
        numberOfQuestions,
        setNumberOfQuestions,
        questions,
        setQuestions,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

const QuestionsConsumer = () => useContext(QuestionsContext);

QuestionsProvider.propTypes = {
  children: P.object.isRequired,
};

export { QuestionsContext, QuestionsProvider, QuestionsConsumer };
