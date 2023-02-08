import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

import {colors} from '../../global/styles';
import ProfileLinks from '../../components/ProfileLinks';

const MyAccountScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={'auto'} />
      <View style={styles.profileDetails}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          }}
          style={styles.profileImage}
        />
        <View style={styles.profileText}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'OpenSans-SemiBold',
              color: '#010743',
            }}>
            Managing Profile:
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'OpenSans-Bold',
              color: '#010743',
            }}>
            John Doe
          </Text>
        </View>
      </View>
      <ProfileLinks
        leftIcon={'person'}
        rightIcon={'chevron-right'}
        profileText={'My Profile'}
      />
      <ProfileLinks
        leftIcon={'shopping-cart'}
        rightIcon={'chevron-right'}
        profileText={'My Orders'}
      />
      <ProfileLinks
        leftIcon={'notifications'}
        rightIcon={'chevron-right'}
        profileText={'Notifications'}
      />
      <ProfileLinks
        leftIcon={'payment'}
        rightIcon={'chevron-right'}
        profileText={'Payments'}
      />
      <ProfileLinks
        leftIcon={'settings'}
        rightIcon={'chevron-right'}
        profileText={'Account Settings'}
      />
      <View style={styles.logouttextContainer}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffecec',
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    marginHorizontal: 10,
    padding: 15,
    shadowColor: colors.buttons,
    elevation: 11,
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    shadowOffset: {
      width: 4,
      height: 0,
    },
  },
  profileImage: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  profileText: {
    marginLeft: 15,
  },

  logoutText: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.buttons,
  },
});
