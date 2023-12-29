import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string().min(2, 'At least 2 characters').required('Required'),
  lastName: yup.string().min(2, 'At least 2 characters').required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  avatar: yup.string().required('Avatar required'),
});

export default schema;
