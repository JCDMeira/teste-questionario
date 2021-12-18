import React, { useState, useEffect } from 'react';
import P from 'prop-types';

// # formik and validation
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validationSchema from '../../Utils/validationSchema';

// # mui styles
import Stack from '@mui/material/Stack';

// # my styles
import * as S from './styled';
import { GlobalStyled } from '../../assets/styles/Global';

// # my visual components
import { BootstrapButton } from '../../components/BootstrapButton/BootstrapButton';
import { Wrapper } from '../../components/Wrapper/Wrapper';

// # my components
import { ShowModal } from '../../components/ShowModal/index';
import { MyErrorMessage } from '../../components/ErrorMessage/index';
import { Footer } from '../../components/Footer';

// # my contexts
import { QuestionsConsumer } from '../../Contexts/questionsContext';

function Home({ history, setPage }) {
  // - global states
  const { setNumberOfQuestions } = QuestionsConsumer();
  // - states
  const [localHistoric, setLocalHistoric] = useState([]);
  const [resetFlag, setResetFlag] = useState(false);

  // - useEffect for control side effects
  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('historic'));
    setLocalHistoric(storedArray);
    setResetFlag(false);
  }, [resetFlag]);

  // - functions
  function onSubmit(values, actions) {
    ShowModal(values, actions, history, setNumberOfQuestions);
  }

  const handleReset = () => {
    localStorage.setItem('historic', JSON.stringify([]));
    setResetFlag(true);
  };

  return (
    <>
      <GlobalStyled />
      <Wrapper>
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
                  <BootstrapButton
                    variant="contained"
                    type="submit"
                    disabled={!isValid}
                  >
                    {' '}
                    Let&apos;s start
                  </BootstrapButton>
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

          <BootstrapButton
            className="resetButton"
            variant="contained"
            onClick={handleReset}
          >
            Reset historic
          </BootstrapButton>
        </S.history>

        <Footer />
      </Wrapper>
    </>
  );
}

// - prop validation
Home.propTypes = {
  history: P.object.isRequired,
  setPage: P.func.isRequired,
};

export default Home;
