import React from 'react';
import PostsScreen from './PostsScreen';
import CreateScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Image, Text } from 'react-native';
import SvgCreateFocused from '../../helpers/SvgCreateFocused';
import SvgCreateUnfocused from '../../helpers/SvgCreateUnfocused';
import SvgPosts from '../../helpers/SvgPosts';
import SvgProfileFocused from '../../helpers/SvgProfileFocused';
import SvgProfileUnfocused from '../../helpers/SvgProfileUnfocused';
import SvgTrashBin from '../../helpers/SvgTrashBin';
import SvgGoBack from '../../helpers/SvgGoBack';
import { HeaderBackButton } from '@react-navigation/elements';

const MainTab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  let focusFlag = false;
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused === true) {
              focusFlag = true;
            }
            return <SvgPosts />;
          },
          headerRight: ({ focused, size, color }) => (
            <MaterialIcons
              name="logout"
              size={24}
              color="grey"
              onPress={() => navigation.navigate('Login')}
            />
          ),
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerTitleAlign: 'center',
        }}
        name="Публикации"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: () => <SvgTrashBin />,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate('Публикации')}
              backImage={() => <SvgGoBack />}
            />
          ),
        }}
        name="Создать публикацию"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused === true) {
              focusFlag = false;
              return <SvgProfileFocused />;
            }
            return <SvgProfileUnfocused />;
          },
          headerTitleAlign: 'center',
        }}
        name="Профиль"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default Home;
