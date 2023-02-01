import React from 'react';
import PostsScreen from './PostsScreen';
import CreateScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Image, Text } from 'react-native';
import SvgCreate from '../../helpers/SvgCreate';
import SvgPosts from '../../helpers/SvgPosts';
import SvgProfile from '../../helpers/SvgProfile';
const MainTab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => <SvgPosts />,
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
          tabBarIcon: ({ focused, size, color }) => <SvgCreate />,
          headerTitleAlign: 'center',
        }}
        name="Создать публикацию"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => <SvgProfile />,
          headerTitleAlign: 'center',
        }}
        name="Профиль"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default Home;
