import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/authScreen/HomeScreen';
import {colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import DrawerContent from '../components/DrawerContent';
import BusinessScreen from '../screens/authScreen/BusinessScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.buttons,
        },
        headerTintColor: colors.cardBackground,
        drawerActiveBackgroundColor: colors.buttons,
        drawerActiveTintColor: colors.cardBackground,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              type="material-community"
              size={size}
              color={focused ? colors.cardBackground : colors.grey3}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Business"
        component={BusinessScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="business"
              type="material"
              size={size}
              color={focused ? colors.cardBackground : colors.grey3}
              // iconStyle={{paddingLeft: -30}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
