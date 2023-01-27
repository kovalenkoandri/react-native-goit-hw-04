import {
  Text,
  View,
  ImageBackground,
  Pressable,
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
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : null}
        >
          <CommonRegisterLogin
            {...{
              passwordValue,
              emailValue,
              inputEmailHandler,
              inputPasswordHandler,
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.8 : 1,
                },
                styles.buttonRegister,
              ]}
              onPress={() => submitHandler({ emailValue, passwordValue })}
            >
              <Text style={styles.textRegister}>Войти</Text>
            </Pressable>
          </CommonRegisterLogin>
        </KeyboardAvoidingView>
        <Text style={styles.textShow}>Нет аккаунта? Зарегистрироваться</Text>
      </View>
    </ImageBackground>
  );
};
