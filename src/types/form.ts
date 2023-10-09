import {
  Control,
  FieldErrors,
} from 'react-hook-form';
import {
  InputBaseComponentProps
} from '@mui/material';

type ProductDefaultValues = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: { url: string }[];
};

type ProductFormProps = {
  errors: FieldErrors<ProductDefaultValues>;
  defaultValues: ProductDefaultValues;
  disabled: boolean;
  loading: boolean;
  submitButtonText: string;
  control: Control<Omit<ProductDefaultValues, 'id'>, any>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

type InputFieldProps = {
  name: "title" | "price" | "description" | "categoryId" | "images" | `images.${number}` | `images.${number}.url`,
  label: string,
  errorMessage?: string,
  type?: string,
  inputProps?: InputBaseComponentProps,
  control: Control<Omit<ProductDefaultValues, 'id'>, any>;
}

type CategorySelectProps = {
  errorMessage?: string,
  defaultValue: number,
  control: Control<Omit<ProductDefaultValues, 'id'>, any>;
};

type ImageURLFieldsProps = {
  errors: FieldErrors<ProductDefaultValues>,
  control: Control<Omit<ProductDefaultValues, 'id'>, any>,
};

export type {
  ProductDefaultValues,
  ProductFormProps,
  InputFieldProps,
  CategorySelectProps,
  ImageURLFieldsProps,
};
