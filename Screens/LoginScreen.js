import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import { useState } from 'react';
import { styles } from '../styles';
import { ValidateInput } from '../helpers/ValidateInput';
import { CommonRegisterLogin } from '../helpers/CommonRegisterLogin';

export const LoginScreen = ({navigation}) => {
  const {
    inputEmailHandler,
    inputPasswordHandler,
    passwordValue,
    emailValue,
    keyboardHide,
    setIsShowKeyboard,
    isShowKeyboard,
    width,
  } = ValidateInput();
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.bg} source={require('../assets/bg.png')}>
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? -110 : 0,
            }}
          >
            <View style={styles.logTitleWrapper}>
              <Text style={styles.authTitle}>Войти</Text>
            </View>
            <CommonRegisterLogin
              {...{
                passwordValue,
                emailValue,
                inputEmailHandler,
                inputPasswordHandler,
                setIsShowKeyboard,
                keyboardHide,
                width,
              }}
            >
              <TouchableOpacity
                style={styles.buttonAuth}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.textAuth}>Войти</Text>
              </TouchableOpacity>
            </CommonRegisterLogin>
            <Text
              onPress={() => navigation.navigate('Registration')}
              style={(styles.textShow, styles.textRoute)}
            >Нет аккаунта? Зарегистрироваться</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
