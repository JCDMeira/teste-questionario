/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';
import Stack from '@mui/material/Stack';
import * as S from './styled';
import { GlobalStyled } from '../../assets/styles/Global';

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

  const showModal = () =>
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
          history.push('/card');
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire('Cancelled', 'Coward', 'error');
        }
      });

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
          <input min="0" type="number" />
          <Stack spacing={2} direction="row">
            <S.BootstrapButton variant="contained" onClick={showModal}>
              Let&apos;s start
            </S.BootstrapButton>
          </Stack>
        </S.QuizCard>

        <S.history></S.history>

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
