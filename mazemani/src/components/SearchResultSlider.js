import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';

const SearchResultSlider = ({name, price, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image
          style={styles.sliderImage}
          source={{uri: image}}
          resizeMode="cover"
        />
        <View style={{justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16, color: colors.grey1}}>{name}</Text>
          <Text style={{fontSize: 16, color: colors.grey1}}>Rs. {price}</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchResultSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.cardBackground,
    height: 100,
    width: 200,
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    elevation: 11,
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    textShadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#333333',
  },
  sliderImage: {
    height: 75,
    width: 75,
    borderRadius: 5,
  },
});
