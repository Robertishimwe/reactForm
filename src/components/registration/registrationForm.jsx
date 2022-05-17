import FormInPuts from './formInPuts';
import facebook from '../../asset/icons8-facebook.svg';
import google from '../../asset/icons8-google.svg';
import React, { useEffect, useState } from 'react';
import '../../styles/registration.scss';

function RegistrationForm() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [FirstNameError, setFirstNameError] = useState('');
  const [LastNameError, setLastNameError] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const nameRigex = /^[a-z]+$/i;
  const emailRigex = /\w+@[a-zA-Z]+\.[com|net|rw|org|edu|co|shop|air]/;
  const passwordRigex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

  useEffect(() => {
    let nameTest = nameRigex.test(values.firstName);
    nameTest === true
      ? setFirstNameError(() => '')
      : setFirstNameError(
          () => 'First name must contain alpha characters only.'
        );
    console.log(nameTest);
  }, [values.firstName]);

  useEffect(() => {
    let nameTest = nameRigex.test(values.lastName);
    nameTest === true
      ? setLastNameError(() => '')
      : setLastNameError(
          () => 'Second name must contain alpha characters only.'
        );
  }, [values.lastName]);

  useEffect(() => {
    let emailTest = emailRigex.test(values.email);
    emailTest === true
      ? setEmailError(() => '')
      : setEmailError(() => 'Please enter a valid email');
  }, [values.email]);

  useEffect(() => {
    let passwordTest = passwordRigex.test(values.password);
    passwordTest === true
      ? setPasswordError(() => '')
      : setPasswordError(
          () => 'Password must contain Alpha, number & special cha'
        );
  }, [values.password]);

  const inputs = [
    {
      id: 'firstName',
      type: 'text',
      errorMessage: FirstNameError,
      label: 'First name',
      name: 'firstName',
    },
    {
      id: 'lastName',
      type: 'text',
      errorMessage: LastNameError,
      label: 'Last name',
      name: 'lastName',
    },
    {
      id: 'email',
      type: 'test',
      errorMessage: EmailError,
      label: 'Email',
      name: 'email',
    },
    {
      id: 'password',
      type: 'password',
      errorMessage: PasswordError,
      label: 'Password',
      name: 'password',
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(passwordTest);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="registrationFormBack">
      <div className="Actualform">
        <p className="registrationTitle">Create account</p>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInPuts key={input.id} {...input} onChange={onChange} />
          ))}
          <br />
          <button>Create account</button>
        </form>
        <p className="titeSocialAouth">Or continue with</p>
        <div className="socialBudges">
          <div className="google">
            <img src={google} alt="google" />
          </div>
          <div className="facebook">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
