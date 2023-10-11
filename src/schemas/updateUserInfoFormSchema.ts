import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(4, 'At least 4 characters').required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  avatar: yup.string().required('Avatar required'),
});

export default schema;
