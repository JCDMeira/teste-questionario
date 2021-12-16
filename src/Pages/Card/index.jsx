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
import radioSchema from '../../Utils/radioSchema';

// # my components
import { InputRadio } from '../../components/InputRadio/index';

import { QuestionsConsumer } from '../../Contexts/questionsContext';

function Card({ history }) {
  function onSubmit(values, actions) {
    console.log('Form data', values);
  }

  const { numberOfQuestions } = QuestionsConsumer();

  const radioOptions = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
    { key: 'Option 4', value: 'option4' },
  ];

  return (
    <>
      <GlobalStyled />
      <S.Wrapper>
        <S.QuizCard>
          <div className="titleDiv">
            <h2>question 1 out of {numberOfQuestions} </h2>
          </div>

          <label className="title">Answer ?</label>

          <Formik
            initialValues={{ radioOption: '' }}
            validationSchema={radioSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(Formik) => (
              <Form className="formConteiner">
                <InputRadio name="radioOption" options={radioOptions} />

                <Stack spacing={2} direction="row">
                  <S.BootstrapButton variant="contained" type="submit">
                    Next
                  </S.BootstrapButton>
                </Stack>
              </Form>
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
