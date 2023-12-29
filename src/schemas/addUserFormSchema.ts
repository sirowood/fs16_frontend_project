import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string().min(2, 'At least 2 characters').required('Required'),
  lastName: yup.string().min(2, 'At least 2 characters').required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().min(8, 'At least 8 characters').required('Required'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  role: yup.string().required('Required'),
  avatar: yup.string().required('Avatar required'),
});

export default schema;
