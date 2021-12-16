/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';
import Stack from '@mui/material/Stack';
import * as S from './styled';
import { GlobalStyled } from '../../assets/styles/Global';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import validationSchema from '../../Utils/validationSchema';

function Home({ history }) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: true,
    confirmButtonColor: '#16CDD9',
    cancelButtonColor: '#5b5b58',
  });

  const showModal = (values, actions) =>
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, start it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire('Go!', 'You can just do it', 'success');
          console.log('SUBMIT', values);
          history.push('/card');
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire('Cancelled', 'Coward', 'error');
          actions.resetForm();
        }
      });

  function onSubmit(values, actions) {
    console.log(values, actions);
    showModal(values, actions);
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
            {({ values, errors, touched, isValid }) => (
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

export default Home;
