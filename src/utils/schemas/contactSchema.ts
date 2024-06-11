import * as yup from 'yup';

import { registerValidationSchema } from '@/utils/schemas/registerSchema';

export const contactValidationSchema = registerValidationSchema
  .pick(['firstName', 'lastName', 'email'])
  .shape({
    message: yup.string().required('Message is required'),
  });

export type ContactSchema = yup.InferType<typeof contactValidationSchema>;
