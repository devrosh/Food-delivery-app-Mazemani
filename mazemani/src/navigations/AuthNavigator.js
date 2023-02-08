import react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/authScreen/WelcomeScreen';
import SignInScreen from '../screens/authScreen/SignInScreen';
import ForgotPasswordScreen from '../screens/authScreen/ForgotPasswordScreen';
import {colors} from '../global/styles';
import HomeScreen from '../screens/authScreen/HomeScreen';
import {Icon, withBadge} from 'react-native-elements';
import {View} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import SignUpScreen from '../screens/authScreen/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = ({navigation}) => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Signin"
        component={SignInScreen}
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerTitlestyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: colors.buttons,
          },
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerTitlestyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: colors.buttons,
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          title: '',

          headerTintColor: 'white',
          headerTitlestyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: colors.buttons,
          },
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: 'Mazemani',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.buttons,
          },
          headerTitlestyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{
          title: 'Mazemani',
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.buttons,
            elevation: 0,
          },
          headerTitlestyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
