import React, { createContext, useContext, useState, useEffect } from 'react';
import P from 'prop-types';

import { api } from '../services/api';

const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);

  useEffect(() => {}, []);

  useEffect(() => {
    // api.get(`/api.php?amount=${numberOfQuestions}`).then((response) => {
    //    console.log(response.data.results);
    //   const formatedQuestions = setQuestions(response.data.results);
    // });

    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await api.get(`/api.php?amount=${numberOfQuestions}`);

        const formatedQuestions = results.map(
          ({ question, correct_answer, incorrect_answers }) => {
            return {
              question,
              correct_answer,
              answers: [...incorrect_answers, correct_answer].sort(
                () => Math.round(Math.random()) - 0.5,
              ),
            };
          },
        );

        console.log(formatedQuestions);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [numberOfQuestions]);

  return (
    <QuestionsContext.Provider
      value={{
        numberOfQuestions,
        setNumberOfQuestions,
        questions,
        setQuestions,
        indexQuestion,
        setIndexQuestion,
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
