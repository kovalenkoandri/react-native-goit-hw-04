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
import { useRoute } from './router';
import { useFonts } from 'expo-font';
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const routing = useRoute(true);
  const [fontsLoaded] = useFonts({
    'RobotoItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
