import * as yup from 'yup';

const schema = yup.object({
  originalPassword: yup.string().min(4, 'At least 4 characters').required('Required'),
  newPassword: yup.string().min(8, 'At least 8 characters').required('Required'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('newPassword')], 'Passwords must match'),
});

export default schema;
