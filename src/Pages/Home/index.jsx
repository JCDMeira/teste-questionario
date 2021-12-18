import React, { useState, useEffect } from 'react';
import P from 'prop-types';

// # my styles
import * as S from './styled';
import { GlobalStyled } from '../../assets/styles/Global';

// # mui styles
import Stack from '@mui/material/Stack';

// # formik and validation
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validationSchema from '../../Utils/validationSchema';

// # my components
import { ShowModal } from '../../components/ShowModal/index';
import { MyErrorMessage } from '../../components/ErrorMessage/index';

import { QuestionsConsumer } from '../../Contexts/questionsContext';
import { Footer } from '../../components/Footer';

// eslint-disable-next-line no-unused-vars
function Home({ history, setPage }) {
  const [localHistoric, setLocalHistoric] = useState([]);
  const [resetFlag, setResetFlag] = useState(false);

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('historic'));
    setLocalHistoric(storedArray);
    setResetFlag(false);
  }, [resetFlag]);

  const { setNumberOfQuestions } = QuestionsConsumer();

  function onSubmit(values, actions) {
    ShowModal(values, actions, history, setNumberOfQuestions);
  }

  const handleReset = () => {
    localStorage.setItem('historic', JSON.stringify([]));
    setResetFlag(true);
  };

  // const handleShow = (item) => {
  //   console.log(item);
  // };

  return (
    <>
      <GlobalStyled />
      <S.Wrapper>
        <h1 className="quiz">Welcome to myQuiz</h1>

        <S.QuizCard>
          <div className="titleDiv">
            <h2>myQuiz</h2>
          </div>
          <p>How many questions do you want to answer ?</p>

          <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
            initialValues={{
              questionaryNumber: '',
            }}
          >
            {/* {({ values, errors, touched, isValid }) => ( */}
            {({ isValid }) => (
              <Form className="formConteiner">
                <Field
                  name="questionaryNumber"
                  type="number"
                  className="input"
                  min="0"
                />
                <ErrorMessage
                  name="questionaryNumber"
                  component={MyErrorMessage}
                />

                <Stack spacing={2} direction="row">
                  <S.BootstrapButton
                    variant="contained"
                    type="submit"
                    disabled={!isValid}
                  >
                    {' '}
                    Let&apos;s start
                  </S.BootstrapButton>
                </Stack>
              </Form>
            )}
          </Formik>
        </S.QuizCard>

        <S.history>
          <h2>Previous Quizz Answers </h2>

          <div className="historicConteiner">
            {localHistoric?.length !== 0 && localHistoric ? (
              localHistoric.map((item, index) => {
                return (
                  <div key={index} onClick={() => setPage('Show', item)}>
                    <p>
                      Attempt {index + 1} : Score - {item.correct}/
                      {item.numberOfQuestions}
                    </p>
                  </div>
                );
              })
            ) : (
              <div>
                <p>There is no attempt </p>
              </div>
            )}
          </div>

          <S.BootstrapButton
            className="resetButton"
            variant="contained"
            onClick={handleReset}
          >
            Reset historic
          </S.BootstrapButton>
        </S.history>

        <Footer />
      </S.Wrapper>
    </>
  );
}

Home.propTypes = {
  history: P.object.isRequired,
  setPage: P.func.isRequired,
};

export default Home;
