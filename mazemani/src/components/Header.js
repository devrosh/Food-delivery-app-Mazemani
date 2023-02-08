import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';

const Header = ({title, name}) => {
  return (
    <View style={styles.header}>
      <Icon
        type="material-community"
        name={name}
        size={28}
        color={colors.headerText}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    alignItems: 'center',
    paddingLeft: 10,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
});
