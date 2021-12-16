/* eslint-disable no-unused-vars */
import React from 'react';
import P from 'prop-types';

// # my styles
import * as S from './styled';
import { GlobalStyled } from '../../assets/styles/Global';

// # mui styles
import Stack from '@mui/material/Stack';

// # formik and validation
import { Formik, Field, Form } from 'formik';
import validationSchema from '../../Utils/validationSchema';

// # my components
import { InputRadio } from '../../components/InputRadio/index';

import { QuestionsConsumer } from '../../Contexts/questionsContext';

function Card({ history }) {
  function onSubmit(values, actions) {}

  const { numberOfQuestions } = QuestionsConsumer();

  return (
    <>
      <GlobalStyled />
      <S.Wrapper>
        <S.QuizCard>
          <div className="titleDiv">
            <h2>question 1 out of {numberOfQuestions} </h2>
          </div>

          <p>How many questions do you want to answer ?</p>

          <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
            initialValues={{}}
          >
            {({ values, isValid }) => (
              console.log(isValid),
              (
                <Form className="formConteiner">
                  <Field
                    type="radio"
                    name="picked"
                    value="A"
                    component={InputRadio}
                  >
                    One
                  </Field>
                  <Field
                    type="radio"
                    name="picked"
                    value="B"
                    component={InputRadio}
                  >
                    One
                  </Field>
                  <Field
                    type="radio"
                    name="picked"
                    value="C"
                    component={InputRadio}
                  >
                    One
                  </Field>
                  <Field
                    type="radio"
                    name="picked"
                    value="D"
                    component={InputRadio}
                  >
                    One
                  </Field>

                  <Stack spacing={2} direction="row">
                    <S.BootstrapButton
                      variant="contained"
                      type="submit"
                      disabled={!values.picked}
                    >
                      {' '}
                      Next
                    </S.BootstrapButton>
                  </Stack>
                </Form>
              )
            )}
          </Formik>
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
}

Card.propTypes = {
  history: P.object.isRequired,
};

export default Card;
