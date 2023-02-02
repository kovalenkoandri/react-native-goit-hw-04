import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoLayout}></View>
      <Text style={styles.textLoadPhoto}>Загрузите фото</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff',
    height: '100%',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  photoLayout: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 240,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 8,
  },
  textLoadPhoto: {
    fontFamily: 'RobotoRegular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
});

export default CreatePostsScreen;
