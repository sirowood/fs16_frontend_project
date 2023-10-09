import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required'),
});

export default schema;
