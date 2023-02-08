import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from 'react-native';
import React, {useState, useMemo, useCallback, useRef} from 'react';

import {colors} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const SignInScreen = ({navigation}) => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const BottomSheetModalRef = useRef(null);

  const handlePresentModal = () => {
    BottomSheetModalRef.current?.present();
  };
  const snapPoints = useMemo(() => ['55%', '70%'], []);

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.tagline}>Get Mesmerising Experience with Us</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInput1}>
          <Icon
            name="email"
            type="material"
            size={25}
            iconStyle={styles.icon}
          />
          <TextInput
            placeholder="Email Adresss"
            placeholderTextColor={colors.grey3}
            onChangeText={text => setInput1(text)}
            autoCapitalize={false}
          />
        </View>
        <View style={styles.textInput2}>
          <Icon name="lock" type="material" size={25} iconStyle={styles.icon} />
          <TextInput
            stytle={{flex: 1}}
            placeholder="Password"
            placeholderTextColor={colors.grey3}
            onChangeText={text => setInput1(text)}
            autoCapitalize={false}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity onPress={handlePresentModal}>
            <Text
              style={{
                textAlign: 'right',
                color: '#010743',
                fontFamily: 'OpenSans-Light',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Login"
          buttonStyle={styles.signInButton}
          onPress={() => navigation.navigate('BottomTabs')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 70,
          left: '18%',
        }}>
        <Text style={{fontFamily: 'OpenSans-Regular', color: '#010743'}}>
          Dont have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text
            style={{
              marginLeft: 5,
              fontFamily: 'OpenSans-SemiBold',
              color: colors.buttons,
            }}>
            Join Mazemani
          </Text>
        </TouchableOpacity>
      </View>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={BottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{borderRadius: 50}}>
          <View style={styles.contentContainer}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 20,
                  fontFamily: 'OpenSans-Bold',
                  color: '#010743',
                }}>
                Forgot Password
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  marginHorizontal: 66,
                  textAlign: 'center',
                  color: '#010743',
                  fontFamily: 'OpenSans-Light',
                }}>
                We will send you the password reset link in your email.
              </Text>
            </View>
            <Text
              style={{
                marginHorizontal: 20,
                marginTop: 40,
                marginBottom: 10,
                color: '#010743',
                fontFamily: 'OpenSans-Light',
              }}>
              Email Address
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#ffecec',
                padding: 10,
                borderRadius: 20,
                marginHorizontal: 20,
                height: 40,
              }}>
              <Icon
                type="material"
                name="email"
                iconStyle={{color: colors.buttons, marginHorizontal: 10}}
              />
              <TextInput placeholder="Email address" autoCapitalize="none" />
            </View>
            <View style={styles.link}>
              <Text style={{color: '#010743', fontFamily: 'OpenSans-Light'}}>
                Didn't recieve the link?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: colors.buttons,
                    fontFamily: 'OpenSans-SemiBold',
                  }}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Send"
              buttonStyle={styles.sendButton}
              onPress={() => {}}
            />
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#010743',
                  fontFamily: 'OpenSans-Light',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffecec',
  },
  loginText: {
    fontSize: 38,
    fontFamily: 'OpenSans-Bold',

    color: '#010743',
    marginVertical: 10,
  },
  tagline: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',

    color: '#010743',
    marginBottom: 30,
  },

  textInput1: {
    borderRadius: 25,
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput2: {
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  signInButton: {
    height: 40,
    backgroundColor: colors.buttons,
    marginHorizontal: 20,
    marginVertical: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.buttons,
    fontFamily: 'OpenSans-Regular',
  },
  forgotText: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 20,
    borderRadius: 25,
    fontSize: 16,
  },

  icon: {
    color: colors.buttons,
    marginRight: 10,
  },
  icon2: {
    color: colors.buttons,
    alignItems: 'flex-end',
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sendButton: {
    height: 40,
    backgroundColor: colors.buttons,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.buttons,
    fontFamily: 'OpenSans-Light',
  },
});
