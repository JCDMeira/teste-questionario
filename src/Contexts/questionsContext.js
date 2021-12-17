import React, { createContext, useContext, useState, useEffect } from 'react';
import P from 'prop-types';

import { api } from '../services/api';

const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [myHistory, setMyHistory] = useState([]);

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
            const arrayQuestions = incorrect_answers.map((item) => ({
              value: item,
            }));
            return {
              question,
              correct_answer,
              answers: [...arrayQuestions, { value: correct_answer }].sort(
                () => Math.round(Math.random()) - 0.5,
              ),
            };
          },
        );

        console.log(myHistory);
        setQuestions(formatedQuestions);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [numberOfQuestions, myHistory]);

  return (
    <QuestionsContext.Provider
      value={{
        numberOfQuestions,
        setNumberOfQuestions,
        questions,
        setQuestions,
        indexQuestion,
        setIndexQuestion,
        correct,
        setCorrect,
        wrong,
        setWrong,
        myHistory,
        setMyHistory,
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
