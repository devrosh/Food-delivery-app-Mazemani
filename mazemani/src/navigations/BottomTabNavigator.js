import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/authScreen/HomeScreen';
import SearchScreen from '../screens/authScreen/SearchScreen';
import MyAccountScreen from '../screens/authScreen/MyAccountScreen';
import MyOrdersScreen from '../screens/authScreen/MyOrdersScreen';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerNavigator from './DrawerNavigator';
import SearchNavigator from './SearchNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.buttons,
      }}>
      <Tab.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size, Focused}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="My Orders"
        component={MyOrdersScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons name="cart" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="My Profile"
        component={MyAccountScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
