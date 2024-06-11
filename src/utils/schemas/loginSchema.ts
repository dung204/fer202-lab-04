import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required'),
});

export type LoginSchema = yup.InferType<typeof loginValidationSchema>;
