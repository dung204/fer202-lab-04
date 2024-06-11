import * as yup from 'yup';

export const registerValidationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
  gender: yup.string().required().oneOf(['male', 'female']).required(),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

export type RegisterSchema = yup.InferType<typeof registerValidationSchema>;
