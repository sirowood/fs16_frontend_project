import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { FilledInputProps, InputBaseComponentProps, OutlinedInputProps, InputProps } from "@mui/material";

import { LoginReq } from "./auth";
import { RegisterUserReq } from "./auth";
import { AddAddressReq } from "./address";

type LoginFormValues = LoginReq;

type RegisterFormValues = Omit<RegisterUserReq, 'role' | 'addresses'> & { confirmPassword: string };

type FullProductFormValues = {
  id: string,
  title: string,
  price: number,
  description: string,
  categoryId: string,
  images: { url: string }[],
};

type ProductFormValues = Omit<FullProductFormValues, "id">;

type FullCategoryFormValues = {
  id: string,
  name: string,
  image: string,
};

type CategoryFormValues = Omit<FullCategoryFormValues, "id">;

type FullUserFormValues = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  role: string,
  password: string,
  avatar: string,
}

type AddUserFormValues = Omit<FullUserFormValues, "id"> & { confirmPassword: string };
type EditUserFormValues = Omit<FullUserFormValues, "id" | "password">
type AddressFormValues = AddAddressReq;

type FormProps<T extends FieldValues> = {
  title: string,
  errors: FieldErrors<T>,
  defaultValues?: T,
  disabled: boolean,
  loading: boolean,
  submitButtonText: string,
  control: Control<T, any>,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
};

type CustomInputProps<T extends FieldValues> = {
  disabled?: boolean,
  name: Path<T>,
  label: string,
  errorMessage?: string,
  type?: string,
  inputProps?: InputBaseComponentProps,
  InputProps?: Partial<OutlinedInputProps> | Partial<FilledInputProps> | Partial<InputProps>,
  control: Control<T, any>,
}

type CategorySelectProps = {
  errorMessage?: string,
  defaultValue?: string,
  control: Control<ProductFormValues, any>,
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
  FullCategoryFormValues,
  CategoryFormValues,
  FullUserFormValues,
  AddUserFormValues,
  EditUserFormValues,
  AddressFormValues,
  CustomInputProps,
  FormProps,
  CategorySelectProps,
  ImageURLFieldsProps,
};
