import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {colors} from '../../global/styles';
import {Button, Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = ({navigation}) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.buttons,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.text1}>Sign Up</Text>
        <Text style={styles.signupText}>Already have an account? Login</Text>
      </View>
      <Animatable.View
        animation={'slideInUp'}
        duration={2000}
        style={styles.inputContainer}>
        <View style={styles.input}>
          <Icon
            name="person"
            type="material"
            size={25}
            iconStyle={styles.icon}
          />
          <TextInput
            value={input1}
            placeholder="Username"
            placeholderTextColor={colors.grey3}
            onChangeText={text => setInput1(text)}
            autoCapitalize={false}
          />
        </View>
        <View style={styles.input}>
          <Icon
            name="email"
            type="material"
            size={25}
            iconStyle={styles.icon}
          />

          <TextInput
            value={input2}
            placeholder="Email"
            placeholderTextColor={colors.grey3}
            onChangeText={text => setInput2(text)}
            autoCapitalize={false}
          />
        </View>

        <View style={styles.input2}>
          <Icon
            name="lock"
            type="material"
            size={25}
            iconStyle={styles.icon}
            placeholderTextColor={colors.grey3}
            onChangeText={text => setInput3(text)}
            autoCapitalize={false}
          />

          <TextInput
            style={{flex: 1}}
            value={input3}
            placeholder="Password"
            placeholderTextColor={colors.grey3}
            secureTextEntry={true}
            onChangeText={text => setInput4(text)}
            autoCapitalize={false}
          />
          <Icon
            name="eye-off"
            type="material-community"
            size={25}
            iconStyle={styles.icon2}
          />
        </View>
        <View style={styles.input2}>
          <Icon name="lock" type="material" size={25} iconStyle={styles.icon} />
          <TextInput
            style={{flex: 1}}
            value={input4}
            placeholder="Confirm Password"
            placeholderTextColor={colors.grey3}
            secureTextEntry={true}
            autoCapitalize={false}
          />
          <Icon
            name="eye-off"
            type="material-community"
            size={25}
            iconStyle={styles.icon2}
          />
        </View>

        <Button
          title="Register"
          buttonStyle={styles.signUpButtons}
          onPress={() => navigation.navigate('Signin')}
        />
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.buttons,
  },
  inputContainer: {
    flex: 2,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#ffecec',
    paddingVertical: 20,
  },
  text1: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
    color: colors.cardBackground,
    marginBottom: 10,
  },
  signupText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    color: colors.cardBackground,
  },
  input: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input2: {
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  signUpButtons: {
    height: 40,
    backgroundColor: colors.buttons,
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.buttons,
    fontFamily: 'OpenSans-SemiBold',
  },
  icon: {
    color: colors.buttons,
    marginRight: 10,
  },
  icon2: {
    color: colors.buttons,
  },
});
