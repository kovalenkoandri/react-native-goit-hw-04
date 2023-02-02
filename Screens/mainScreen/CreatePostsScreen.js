import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SvgLocationMark from '../../helpers/SvgLocationMark';

const CreatePostsScreen = () => {
  return (
    <View style={styles.CreatePostsScreenContainer}>
      <View style={styles.CreatePostsScreenLoadPhoto}></View>
      <Text style={styles.CreatePostsScreenTextLoadPhoto}>Загрузите фото</Text>
      <Text style={styles.CreatePostsScreenPhotoName}>Название...</Text>
      <View>
        <SvgLocationMark style={styles.CreatePostsScreenLocation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CreatePostsScreenContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff',
    height: '100%',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  CreatePostsScreenLoadPhoto: {
    backgroundColor: '#F6F6F6',
    height: 240,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 8,
  },
  CreatePostsScreenTextLoadPhoto: {
    fontFamily: 'RobotoRegular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginBottom: 48,
  },
  CreatePostsScreenPhotoName: {
    fontFamily: 'RobotoRegular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginBottom: 15,
  },
  CreatePostsScreenWrapperLocation: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    height: 66,
    marginBottom: 32,
  },
  CreatePostsScreenLocation: {
    
  },
});

export default CreatePostsScreen;
