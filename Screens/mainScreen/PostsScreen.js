import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.PostsScreenUserOuter}>
        <ImageBackground
          style={styles.PostsScreenUserPhoto}
          source={require('../../assets/user.png')}
        ></ImageBackground>
        <View style={styles.PostsScreenUserContacts}>
          <Text style={styles.PostsScreenUserName}>Natali Romanova</Text>
          <Text style={styles.PostsScreenUserEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  PostsScreenUserOuter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  PostsScreenUserPhoto: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  PostsScreenUserName: {
    fontFamily: 'RobotoItalic',
    fontStyle: 'Bold',
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 8,
    color: '#212121',
  },
  PostsScreenUserEmail: {
    fontFamily: 'RobotoItalic',
    fontStyle: 'Regular',
    fontSize: 11,
    lineHeight: 13,
    marginLeft: 8,
    color: '#212121CC',
  },
});

export default PostsScreen;
