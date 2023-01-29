import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'RobotoItalic',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  form: {
    paddingTop: 32,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    backgroundColor: '#282c34',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  addPhoto: {
    width: 132,
    height: 120,
    marginTop: -92, //-60 figma templ - 32 compens form.padTop
    marginBottom: 32,
  },
  regTitleWrapper: {
    marginBottom: 33,
  },
  logTitleWrapper: {
    marginBottom: 33,
  },
  authTitle: {
    fontFamily: 'RobotoItalic',
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    color: '#98c379',
  },
  inputLogin: {
    marginBottom: 16,
    width: 343,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    backgroundColor: '#c678dd',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    paddingLeft: 16,
  },
  inputEmail: {
    marginBottom: 16,
    width: 343,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    backgroundColor: '#c678dd',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderColor: Platform.OS === 'web' ? 'red' : 'green',
    borderStyle: 'solid',
    paddingLeft: 16,
  },
  inputPasswordWrapper: {
    marginBottom: 43,
    width: 343,
    height: 50,
  },
  inputPassword: {
    position: 'absolute',
    width: 343,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    backgroundColor: '#c678dd',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderColor: Platform.OS === 'web' ? 'red' : 'green',
    borderStyle: 'solid',
    paddingLeft: 16,
    justifyContent: 'center',
  },
  buttonShow: {
    width: 80,
    height: 50,
    marginLeft: 256,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  textShow: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: '#1B4371',
    fontFamily: 'RobotoItalic',
  },
  buttonAuth: {
    marginBottom: 16,
    width: 343,
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6C00',
    backgroundColor: '#c678dd',
    borderRadius: 100,
  },
  textAuth: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    letterSpacing: 0.25,
    color: '#fff',
    fontFamily: 'RobotoItalic',
  },
  textRoute: {
    color: '#fff',
    marginBottom: 90,
  },
});
