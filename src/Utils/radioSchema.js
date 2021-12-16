import * as Yup from 'yup';

export default Yup.object().shape({
  radioOption: Yup.string().required('Required'),
});
