import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../global/styles';

const FoodItem = ({foodType, price, image}) => {
  const [itemNumber, setItemNumber] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.itemDetails}>
          <Text style={styles.foodType}>{foodType}</Text>
          <Text style={styles.foodPrice}>Rs {price}</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <Pressable
          style={{marginHorizontal: 5}}
          onPress={() => {
            setItemNumber(itemNumber + 1);
          }}>
          <Text style={styles.pressable}>+</Text>
        </Pressable>
        <Pressable style={{marginHorizontal: 5}}>
          <Text style={styles.pressable}>{itemNumber}</Text>
        </Pressable>
        <Pressable
          style={{marginHorizontal: 5}}
          onPress={() => {
            setItemNumber(itemNumber - 1);
          }}>
          <Text style={styles.pressable}>-</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  foodType: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: '#010743',
  },
  foodPrice: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#010743',
  },
  itemDetails: {
    marginLeft: 15,
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view2: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffecec',
    paddingTop: 0,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  pressable: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    color: '#010743',
  },
});
