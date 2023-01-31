import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import { useRoute } from './router';
import { useFonts } from 'expo-font';
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const routing = useRoute(false);
  const [fontsLoaded] = useFonts({
    'RobotoItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
