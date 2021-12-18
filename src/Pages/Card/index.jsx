/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import P from 'prop-types';

// # my styles
import * as S from './styled';
import { GlobalStyled } from '../../assets/styles/Global';

// # mui styles
import Stack from '@mui/material/Stack';

// # formik and validation
import { Formik, Field, Form } from 'formik';
import radioSchema from '../../Utils/radioSchema';

// # my components
import { InputRadio } from '../../components/InputRadio/index';
import { BootstrapButton } from '../../components/BootstrapButton/BootstrapButton';
import { Wrapper } from '../../components/Wrapper/Wrapper';

import { QuestionsConsumer } from '../../Contexts/questionsContext';
import { Footer } from '../../components/Footer';

function Card({ history }) {
  const {
    numberOfQuestions,
    questions,
    indexQuestion,
    setIndexQuestion,
    correct,
    setCorrect,
    wrong,
    setWrong,
    myHistory,
    setMyHistory,
    myQuestions,
    setMyQuestions,
  } = QuestionsConsumer();

  const [next, setNext] = useState(false);

  useEffect(() => {
    setNext(false);
  }, [indexQuestion]);

  const handleNext = () => {
    setNext(true);
  };

  // console.log('questions', myQuestions);

  // ! modelo esperado para o histórico
  // const result = [
  //   {
  //     numberOfQuestions,
  //     correct,
  //     resultQuestions: [
  //       {
  //         question: '',
  //         correct_answer: '',
  //         answer: '',
  //       },
  //     ],
  //   },
  // ];

  function onSubmit(
    values,
    actions,
    correctAnswer = questions[indexQuestion].correct_answer,
  ) {
    if (correctAnswer === values.radioOption) {
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }

    if (indexQuestion + 1 === numberOfQuestions) {
      const localHistoric = JSON.parse(localStorage.getItem('historic')) || [];

      const support = [
        {
          numberOfQuestions,
          correct: correctAnswer === values.radioOption ? correct + 1 : correct,
          resultQuestions: [
            ...myQuestions,
            {
              question: questions[indexQuestion].question,
              correctAnswer: questions[indexQuestion].correct_answer,
              answer: values.radioOption,
            },
          ],
        },
      ];

      localStorage.setItem(
        'historic',
        JSON.stringify([...localHistoric, support[0]]),
      );

      setMyHistory([
        ...myHistory,
        {
          numberOfQuestions,
          correct: correctAnswer === values.radioOption ? correct + 1 : correct,
          resultQuestions: [
            ...myQuestions,
            {
              question: questions[indexQuestion].question,
              correctAnswer: questions[indexQuestion].correct_answer,
              answer: values.radioOption,
            },
          ],
        },
      ]);

      setIndexQuestion(0);
      setCorrect(0);
      setWrong(0);

      history.push('/');
    } else {
      setMyQuestions([
        ...myQuestions,
        {
          question: questions[indexQuestion].question,
          correctAnswer: questions[indexQuestion].correct_answer,
          answer: values.radioOption,
        },
      ]);
      setIndexQuestion(indexQuestion + 1);
    }
  }

  if (questions.length !== 0)
    return (
      <>
        <GlobalStyled />
        <Wrapper>
          <S.QuizCard>
            <div className="titleDiv">
              <h2>
                question {indexQuestion + 1} out of {numberOfQuestions}
              </h2>
            </div>

            <label className="title">{questions[indexQuestion].question}</label>

            <Formik
              initialValues={{ radioOption: '' }}
              validationSchema={radioSchema}
              onSubmit={onSubmit}
              validateOnMount
            >
              {(Formik) => (
                <Form className="formConteiner">
                  <InputRadio
                    onClick={() => handleNext()}
                    name="radioOption"
                    options={questions[indexQuestion].answers}
                    correct={questions[indexQuestion].correct_answer}
                  />

                  <Stack spacing={2} direction="row">
                    <BootstrapButton
                      variant="contained"
                      type="submit"
                      disabled={!next}
                    >
                      Next
                    </BootstrapButton>
                  </Stack>
                </Form>
              )}
            </Formik>

            <div className="score">
              <h1>Score</h1>
              <h2>Correct answers: {correct}</h2>
              <h2>Wrong answers: {wrong}</h2>
            </div>
          </S.QuizCard>
          <Footer />
        </Wrapper>
      </>
    );
  return <></>;
}

Card.propTypes = {
  history: P.object.isRequired,
};

export default Card;
