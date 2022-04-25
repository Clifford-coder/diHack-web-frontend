/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

import {
  Card,
  Form,
  Input,
  InputErrMess,
  Label,
  Submit,
  Title,
  Wrapper,
  ShowPassword,
} from './styles';
import { firebaseAuth, firestore } from '../../apis/Firebase';

const signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email should be a valid email'),
    emergencyContact: Yup.string().required('Emergency contact is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Must be minimum of 8 characters')
      .max(32, 'Must be maximum of 32 characters'),
    confirmPassword: Yup.string()
      .required('Must confirm password')
      .oneOf(
        [Yup.ref('password'), null],
        'Confirm Password does not match password'
      ),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      emergencyContact: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
      try {
        //create email with this email in firebase
        const user = await firebaseAuth.createUserWithEmailAndPassword(
          firebaseAuth.getAuth(),
          values.email,
          values.password
        );
        // save user details in firestore.
        const { getFirestore, addDoc, collection } = firestore;
        await addDoc(collection(getFirestore(), 'users'), {
          id: user.user.uid,
          emergencyContact: values.emergencyContact,
        });
        toast.success('Successfully signed up!');
        // send user to home page
        navigate('/home', { replace: true });
      } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage.includes('auth/email-already-in-use'))
          toast.error(
            'Signing up failed. There is an existing user registered with this email'
          );
        else if (errorMessage.includes('auth/network-request-failed'))
          toast.error('Network Error. Please check your internet connection');
        else toast.error(errorMessage);
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
        <Title>Sign up with shii</Title>
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

          <Label>Emergency Contact:</Label>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.emergencyContact}
            id="emergencyContact"
            name="emergencyContact"
          />
          {errors.emergencyContact && (
            <InputErrMess>{errors.emergencyContact}</InputErrMess>
          )}

          <Label>Password:</Label>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
          />
          <ShowPassword>
            <span onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </ShowPassword>
          {errors.password && <InputErrMess>{errors.password}</InputErrMess>}

          <Label>Confirm Password:</Label>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
          />
          <ShowPassword>
            <span onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </ShowPassword>
          {errors.confirmPassword && (
            <InputErrMess>{errors.confirmPassword}</InputErrMess>
          )}

          <Submit type="submit" disabled={isSubmitting}>
            {isSubmitting ? <BeatLoader size={16} color="#272b2a" /> : 'Submit'}
          </Submit>
        </Form>
        <div className="ui horizontal divider">Or</div>
        <p>
          Already have an account?{' '}
          <Link style={{ color: 'blue' }} to="/sign-in">
            Sign In
          </Link>
        </p>
      </Card>
    </Wrapper>
  );
};

export default signup;
