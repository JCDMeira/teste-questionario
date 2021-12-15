/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';
import Stack from '@mui/material/Stack';
import { BootstrapButton } from './styled';

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
    <div>
      <Stack spacing={2} direction="row">
        <BootstrapButton variant="contained" onClick={showModal}>
          Let&apos;s start
        </BootstrapButton>
      </Stack>
    </div>
  );
}

export default Home;
