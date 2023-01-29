import { LoginScreen } from './Screens/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
} from 'react-native';
import { ValidateInput } from './helpers/ValidateInput';
import { WrapperAuth } from './helpers/WrapperAuth';
import { styles } from './styles';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const Stack = createNativeStackNavigator();
  const { keyboardHide, isShowKeyboard } = ValidateInput();
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          RobotoItalic: require('./assets/fonts/Roboto-MediumItalic.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
