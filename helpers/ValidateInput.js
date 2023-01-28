import { useState } from 'react';
import { Keyboard } from 'react-native';

export const ValidateInput = () => {
  const [loginValue, setLoginValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const inputLoginHandler = (text) => setLoginValue(text);
  const inputEmailHandler = (text) => setEmailValue(text);
  const inputPasswordHandler = (text) => setPasswordValue(text);
  const submitHandler = (creds) => console.log({ ...creds });
  const passHideHandler = (hidePass) => setHidePass(!hidePass);
  return {
    inputLoginHandler,
    inputEmailHandler,
    inputPasswordHandler,
    submitHandler,
    passHideHandler,
    hidePass,
    passwordValue,
    emailValue,
    loginValue,
  };
};
