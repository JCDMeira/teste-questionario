import * as Yup from 'yup';

export default Yup.object().shape({
  questionaryNumber: Yup.number()
    .min(1, 'Minimum number of questions accepted is 1')
    .max(50, 'The maximum number of questions accepted is 50')
    .required('This is a required field '),
});
