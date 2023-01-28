import { useState } from 'react';
import { Keyboard } from 'react-native';

export const ValidateInput = () => {
  const [loginValue, setLoginValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const inputLoginHandler = (text) => setLoginValue(text);
  const inputEmailHandler = (text) => setEmailValue(text);
  const inputPasswordHandler = (text) => setPasswordValue(text);
  const passHideHandler = (hidePass) => setHidePass(!hidePass);
  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    console.log(loginValue, emailValue, passwordValue);
    setLoginValue('');
    setEmailValue('');
    setPasswordValue('');
  };
  return {
    inputLoginHandler,
    inputEmailHandler,
    inputPasswordHandler,
    passHideHandler,
    loginValue,
    emailValue,
    passwordValue,
    hidePass,
    keyboardHide,
    setIsShowKeyboard,
    isShowKeyboard,
  };
};
