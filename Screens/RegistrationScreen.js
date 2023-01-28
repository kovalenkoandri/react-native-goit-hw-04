import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
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
  return (
      <ImageBackground style={styles.bg} source={require('../assets/bg.png')}>
        <View style={[styles.container, styles.containerRegister]}>
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
          />
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
  );
};
