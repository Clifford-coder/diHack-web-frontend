/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

import {
  Wrapper,
  Card,
  Form,
  Title,
  Label,
  Input,
  InputErrMess,
  ShowPassword,
  Submit,
} from '../signup/styles';
import { firebaseAuth } from '../../apis/Firebase';

const login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email should be a valid email'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Must be minimum of 8 characters')
      .max(32, 'Must be maximum of 32 characters'),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        //sign user in with this credentials
        const auth = firebaseAuth.getAuth();
        await firebaseAuth.signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        toast.success('Logged in successfully!');
        navigate('/home', { replace: true });
      } catch (error) {
        const errorMessage = error.message;
        toast.error(errorMessage);
      }
    },
  });

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <Wrapper>
      <Card>
        <Title>Sign In with shii</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Email:</Label>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            id="email"
            name="email"
          />
          {errors.email && <InputErrMess>{errors.email}</InputErrMess>}

          <Label>Password:</Label>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
          />
          <ShowPassword>
            <span onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </ShowPassword>
          {errors.password && <InputErrMess>{errors.password}</InputErrMess>}

          <Submit type="submit" disabled={isSubmitting}>
            {isSubmitting ? <BeatLoader size={16} color="#272b2a" /> : 'Submit'}
          </Submit>
        </Form>
        <div className="ui horizontal divider">Or</div>
        <p>
          Don't have an account?{' '}
          <Link style={{ color: 'blue' }} to="/sign-up">
            Sign Up
          </Link>
        </p>
      </Card>
    </Wrapper>
  );
};

export default login;
