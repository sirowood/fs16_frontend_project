import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(4, 'At least 4 characters').required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().min(8, 'At least 8 characters').required('Required'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  avatar: yup.string().required('Avatar required'),
});

export default schema;
