import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().min(4, 'At least 4 characters').required('Required'),
  price: yup
    .number()
    .typeError('Must be a number')
    .min(1, 'At least 1')
    .required('Required'),
  description: yup
    .string()
    .min(4, 'At least 4 characters')
    .required('Required'),
  categoryId: yup
    .number()
    .min(1, 'Please select a category')
    .required('required'),
  images: yup
    .array()
    .of(
      yup.object().shape({
        url: yup.string().url('Invalid URL format').required('Required'),
      })
    )
    .required('At least one image URL is required'),
});

export default schema;
