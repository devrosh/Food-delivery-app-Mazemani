import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';

const PofileLinks = ({leftIcon, rightIcon, profileText}) => {
  return (
    <View>
      <View style={styles.profileLinks}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name={leftIcon}
            type="material"
            size={28}
            iconStyle={styles.icon}
            color={colors.buttons}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 16,
              fontFamily: 'OpenSans-SemiBold',
              color: '#010743',
            }}>
            {profileText}
          </Text>
        </View>
        <Icon
          name={rightIcon}
          type="material"
          size={30}
          color={colors.buttons}
        />
      </View>
    </View>
  );
};

export default PofileLinks;

const styles = StyleSheet.create({
  profileLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 7,
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
  icon: {
    backgroundColor: '#ffecec',
    padding: 7,
    borderRadius: 7,
    shadowColor: colors.buttons,
    elevation: 11,
    shadowOpacity: 0.3,
    shadowRadius: 6.68,
    shadowOffset: {
      width: 4,
      height: 0,
    },
  },
});
