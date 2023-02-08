import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-elements';

import {colors, parameters} from '../../global/styles';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: colors.buttons}}>
          Discover Restaurants
        </Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: colors.buttons}}>
          In Your Area
        </Text>
      </View>

      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/deliverysvg.jpg')}
          resizeMode="cover"
        />
      </View>
      <View>
        <Button
          title="Sign In"
          buttonStyle={styles.signInButton}
          onPress={() => navigation.navigate('Signin')}
        />
      </View>
      <View>
        <Button
          title="Create new acount"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    height: 400,
    width: '100%',
    marginTop: 30,
  },
  signInButton: {
    height: 40,
    backgroundColor: colors.buttons,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.buttons,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#ffecec',
    borderWidth: 1,
    borderColor: colors.buttons,
    borderRadius: 20,
    height: 40,
    marginHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.buttons,
  },
});
