import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { Dimensions } from 'react-native';

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
  const [width, setWidth] = useState(Dimensions.get('window').width - 20 * 2);
  useEffect(() => {
    const onChange = () => {
      setWidth(Dimensions.get('window').width - 20 * 2);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);
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
    width,
  };
};
