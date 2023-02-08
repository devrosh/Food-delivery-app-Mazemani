import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../../../global/styles';
import {menuData, specialData} from '../../../global/Data';

const MenuScreen = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        {specialData.map(items => (
          <TouchableOpacity onPress={onPress} key={items.key}>
            <View style={styles.specialData}>
              <Icon
                style={styles.menuIcon}
                name="star"
                type="material"
                size={20}
                color={'gold'}
              />
              <Text key={items.key} style={styles.menuItem}>
                {items.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {menuData.map(items => (
          <TouchableOpacity key={items.key}>
            <Text key={items.key} style={styles.menuItem}>
              {items.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  specialData: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // padding: 10,
    marginLeft: 10,
  },
  menuItem: {
    fontWeight: '600',
    color: colors.grey1,
    marginLeft: 10,
    padding: 10,
  },
});
