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

import { QuestionsConsumer } from '../../Contexts/questionsContext';

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
  } = QuestionsConsumer();

  function onSubmit(
    values,
    actions,
    correctAnswer = questions[indexQuestion].correct_answer,
  ) {
    console.log(
      'resposta recebida',
      values.radioOption,
      'resposta esperada',
      correctAnswer,
      'is correct',
      correctAnswer === values.radioOption,
    );
    if (correctAnswer === values.radioOption) {
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }
    if (indexQuestion + 1 === numberOfQuestions) {
      setIndexQuestion(0);
      setCorrect(0);
      setWrong(0);
      history.push('/');
    } else {
      setIndexQuestion(indexQuestion + 1);
    }
  }

  const radioOptions = [
    { value: 'option1' },
    { value: 'option2' },
    { value: 'option3' },
    { value: 'option4' },
  ];

  if (questions.length !== 0)
    return (
      <>
        <GlobalStyled />
        <S.Wrapper>
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
                    name="radioOption"
                    options={questions[indexQuestion].answers}
                    correct={questions[indexQuestion].correct_answer}
                  />

                  <Stack spacing={2} direction="row">
                    <S.BootstrapButton variant="contained" type="submit">
                      Next
                    </S.BootstrapButton>
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

          <span className="jean">
            Proudly made by{' '}
            <a
              target="_blank"
              href="https://github.com/JCDMeira"
              rel="noreferrer"
            >
              Jean Meira
            </a>
          </span>
        </S.Wrapper>
      </>
    );
  return <></>;
}

Card.propTypes = {
  history: P.object.isRequired,
};

export default Card;
