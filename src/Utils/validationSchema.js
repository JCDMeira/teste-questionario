import * as Yup from 'yup';

export default Yup.object().shape({
  questionaryNumber: Yup.number().min(1).max(50).required(),
});
