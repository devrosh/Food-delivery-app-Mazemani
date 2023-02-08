import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/authScreen/SearchScreen';
import SearchResultsScreen from '../screens/authScreen/SearchResultsScreen';
import RestaurantScreen from '../screens/authScreen/RestaurantScreen';
import {colors} from '../global/styles';
import MenuDetailsScreen from '../screens/authScreen/MenuDetailsScreen';
import PreferenceScreen from '../screens/authScreen/RestaurantTabs/PreferenceScreen';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRouteName={SearchScreen}
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResultsScreen"
        component={SearchResultsScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Search Results',
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
        name="RestaurantScreen"
        component={RestaurantScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="menuDetails"
        component={MenuDetailsScreen}
        options={{
          title: 'Menu',
          headerBackTitleVisible: false,
          headerTintColor: colors.buttons,
        }}
      />
      <Stack.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={{
          title: 'Food Preferences',
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colors.buttons,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
