import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Badge, Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../../global/styles';

const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20}}>
        <Icon type="material-community" name="menu" size={35} color="white" />
      </View>
      <View>
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
          Mazemani
        </Text>
      </View>
      <View style={{marginRight: 20}}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={30}
          color="white"
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
});
