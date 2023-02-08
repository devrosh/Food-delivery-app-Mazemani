import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Switch,
  Linking,
} from 'react-native';
import React from 'react';
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Avatar, Icon} from 'react-native-elements';
import {colors} from '../global/styles';

const DrawerContent = props => {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: colors.buttons}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
              }}
              size={75}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontWeight: 'bold', color: colors.cardBackground}}>
                John Doe
              </Text>
              <Text style={{color: colors.cardBackground}}>
                devrosh22@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 10,
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: colors.cardBackground}}>1</Text>
              <Text style={{color: colors.cardBackground}}>My Favorites</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: colors.cardBackground}}>0</Text>
              <Text style={{color: colors.cardBackground}}>My Cart</Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Payment"
          icon={(color, size, focused) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={focused ? colors.cardBackground : colors.grey3}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          icon={(color, size, focused) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={focused ? colors.cardBackground : colors.grey3}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={(color, size, focused) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={focused ? colors.cardBackground : colors.grey3}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Help"
          icon={(color, size, focused) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={focused ? colors.cardBackground : colors.grey3}
              size={size}
            />
          )}
        />
        <View style={{borderTopWidth: 1, borderTopColor: colors.grey5}}>
          <Text style={styles.preferences}>Preferences</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <Switch
              thumbColor="#f4f3f4"
              trackColor={{false: '#f2f2f2', true: colors.buttons}}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="SignOut"
        icon={(color, size, focused) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={focused ? colors.cardBackground : colors.grey3}
            size={size}
          />
        )}
      />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.cardBackground,
  },
  preferences: {
    fontSize: 16,
    color: colors.grey1,
    marginLeft: 20,
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  darkthemeText: {
    color: colors.grey2,
  },
});
