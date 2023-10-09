import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import { InputBaseComponentProps } from '@mui/material';

import { LoginReq } from "./auth";
import { RegisterUserReq } from "./user";

type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>

type LoginFormValues = LoginReq;

type RegisterFormValues = RegisterUserReq;

type FullProductFormValues = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: { url: string }[];
};

type ProductFormValues = Omit<FullProductFormValues, 'id'>;

type ProductFormProps = {
  errors: FieldErrors<ProductFormValues>;
  defaultValues: ProductFormValues;
  disabled: boolean;
  loading: boolean;
  submitButtonText: string;
  control: Control<ProductFormValues, any>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

type InputFieldProps = {
  name: FieldPath<ProductFormValues>,
  label: string,
  errorMessage?: string,
  type?: string,
  inputProps?: InputBaseComponentProps,
  control: Control<ProductFormValues, any>;
}

type CategorySelectProps = {
  errorMessage?: string,
  defaultValue: number,
  control: Control<ProductFormValues, any>;
};

type ImageURLFieldsProps = {
  errors: FieldErrors<ProductFormValues>,
  control: Control<ProductFormValues, any>,
};

export type {
  LoginFormValues,
  RegisterFormValues,
  FullProductFormValues,
  ProductFormValues,
  ProductFormProps,
  InputFieldProps,
  CategorySelectProps,
  ImageURLFieldsProps,
};
