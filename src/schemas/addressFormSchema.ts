import * as yup from 'yup';

const schema = yup.object({
  street: yup.string().min(4, 'At least 4 characters').required('Required'),
  postCode: yup.string().matches(/^\d{5}$/, 'Invalid post code').required('Required'),
  city: yup.string().min(4, 'At least 4 characters').required('Required'),
  country: yup.string().min(4, 'At least 4 characters').required('Required'),
});

export default schema;
