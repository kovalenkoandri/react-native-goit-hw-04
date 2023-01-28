import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from '../styles';
import { ValidateInput } from '../helpers/ValidateInput';
import { CommonRegisterLogin } from '../helpers/CommonRegisterLogin';

export const LoginScreen = () => {
  const {
    inputEmailHandler,
    inputPasswordHandler,
    submitHandler,
    passwordValue,
    emailValue,
  } = ValidateInput();
  return (
    <ImageBackground style={styles.bg} source={require('../assets/bg.png')}>
      <View style={styles.container}>
        <View style={styles.logTitleWrapper}>
          <Text style={styles.authTitle}>Войти</Text>
        </View>
          <CommonRegisterLogin
            {...{
              passwordValue,
              emailValue,
              inputEmailHandler,
              inputPasswordHandler,
            }}
          >
            <TouchableOpacity
              style={styles.buttonAuth}
              activeOpacity={0.8}
              onPress={() => submitHandler({ emailValue, passwordValue })}
            >
              <Text style={styles.textAuth}>Войти</Text>
            </TouchableOpacity>
          </CommonRegisterLogin>
        <Text style={styles.textShow}>Нет аккаунта? Зарегистрироваться</Text>
      </View>
    </ImageBackground>
  );
};
