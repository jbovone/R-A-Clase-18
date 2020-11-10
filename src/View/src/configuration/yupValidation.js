import * as Yup from 'yup';
import { PASSWORD_MAX, PASSWORD_MIN, USERNAME_MAX, USERNAME_MIN } from '../../../Invariances/validation';

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(USERNAME_MIN, 'This name is too short.')
    .max(USERNAME_MAX, 'This name is too long!')
    .required('Required'),
  password: Yup.string()
    .min(PASSWORD_MIN, 'This name is too short!')
    .max(PASSWORD_MAX, 'This password is too long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
