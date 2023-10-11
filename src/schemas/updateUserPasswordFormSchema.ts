import * as yup from 'yup';

const schema = yup.object({
  password: yup.string().min(8, 'At least 8 characters').required('Required'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export default schema;
