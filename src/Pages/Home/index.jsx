import React from 'react';
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

function Home({ history }) {
  function onSubmit(values, actions) {
    console.log(values, actions, 'hist', history);
    ShowModal(values, actions, history);
  }

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
                <ErrorMessage name="questionaryNumber" />

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

          <div>
            <p>answered in 14/12/2021 20:09</p>
          </div>

          <div>
            <p>answered in 12/12/2021 17:09</p>
          </div>
        </S.history>

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
}

Home.propTypes = {
  history: P.object.isRequired,
};

export default Home;
