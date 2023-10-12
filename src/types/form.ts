import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import { InputBaseComponentProps } from '@mui/material';

import { LoginReq } from "./auth";
import { RegisterUserReq } from "./user";

type LoginFormValues = LoginReq;

type RegisterFormValues = RegisterUserReq & { confirmPassword: string };

type FullProductFormValues = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: { url: string }[];
};

type ProductFormValues = Omit<FullProductFormValues, 'id'>;

type FormProps<T extends FieldValues> = {
  title: string;
  errors: FieldErrors<T>;
  defaultValues?: T;
  disabled: boolean;
  loading: boolean;
  submitButtonText: string;
  control: Control<T, any>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

type InputProps<T extends FieldValues> = {
  name: Path<T>,
  label: string,
  errorMessage?: string,
  type?: string,
  inputProps?: InputBaseComponentProps,
  control: Control<T, any>;
}

type CategorySelectProps = {
  errorMessage?: string,
  defaultValue?: number,
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
  InputProps,
  FormProps,
  CategorySelectProps,
  ImageURLFieldsProps,
};
