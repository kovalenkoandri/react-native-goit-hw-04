import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useState } from 'react';
import { styles } from '../styles';
import { ValidateInput } from '../helpers/ValidateInput';
import { CommonRegisterLogin } from '../helpers/CommonRegisterLogin';

export const RegistrationScreen = () => {
  const {
    inputLoginHandler,
    inputEmailHandler,
    inputPasswordHandler,
    submitHandler,
    passwordValue,
    emailValue,
    loginValue,
  } = ValidateInput();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

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
            <Image
              source={require('../assets/addPhoto.png')}
              style={styles.addPhoto}
            />
            <View style={styles.regTitleWrapper}>
              <Text style={styles.authTitle}>Регистрация</Text>
            </View>
            <TextInput
              placeholder="Логин"
              value={loginValue}
              onChangeText={inputLoginHandler}
              style={styles.inputLogin}
              onFocus={() => setIsShowKeyboard(true)}
            />
            <CommonRegisterLogin
              {...{
                passwordValue,
                emailValue,
                inputEmailHandler,
                inputPasswordHandler,
                setIsShowKeyboard,
              }}
            >
              <TouchableOpacity
                style={styles.buttonAuth}
                activeOpacity={0.8}
                onPress={() =>
                  submitHandler({ loginValue, emailValue, passwordValue })
                }
              >
                <Text style={styles.textAuth}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text style={styles.textShow}>Уже есть аккаунт? Войти</Text>
            </CommonRegisterLogin>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
