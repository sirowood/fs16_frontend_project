import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(4, 'At least 4 characters').required('Required'),
  image: yup.string().url('Invalid URL format').required('Required')
});

export default schema;
