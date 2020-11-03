import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'This name is too short.')
    .max(12, 'This name is too long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'This name is too short!')
    .max(15, 'This password is too long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
