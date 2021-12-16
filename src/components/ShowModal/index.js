import Swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger',
  },
  buttonsStyling: true,
  confirmButtonColor: '#16CDD9',
  cancelButtonColor: '#5b5b58',
});

export const ShowModal = (values, actions, history, setNumberOfQuestions) =>
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
        setNumberOfQuestions(values.questionaryNumber);
        history.push('/card');
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire('Cancelled', 'Coward', 'error');
        setNumberOfQuestions(0);
        actions.resetForm();
      }
    });
