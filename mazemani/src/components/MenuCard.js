import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';

const MenuCard = ({image, productName, productDetails, price}) => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.text1}>{productName}</Text>
          <View>
            <Text style={styles.text2}>{productDetails}</Text>
          </View>
          <Text style={styles.text3}>Rs {price}</Text>
        </View>
        <View style={{flex: 2}}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: '#fff',
    elevation: 11,
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    textShadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#333333',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },

  view2: {
    flex: 1,
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'space-between',
  },

  view3: {flex: 6, justifyContent: 'space-between'},

  text1: {
    fontSize: 15,
    color: colors.grey1,
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 15,
    color: colors.grey3,
    marginRight: 2,
  },

  text3: {
    fontSize: 15,
    color: colors.black,
  },

  image: {flex: 1, borderRadius: 5},
});
