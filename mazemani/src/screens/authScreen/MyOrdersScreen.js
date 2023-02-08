import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import FoodItem from '../../components/FoodItem';
import {menuDetailedData} from '../../global/Data';
import {colors} from '../../global/styles';

const WIDTH = Dimensions.get('window').width;

const MyOrdersScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.orderDetails}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={menuDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <FoodItem
                foodType={item.meal}
                price={item.price}
                image={item.image}
              />
            );
          }}
        />
      </View>
      <View>
        <Pressable style={styles.orderButton}>
          <Text style={styles.text}>Order to Rs 1250</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffecec',
  },
  imageContainer: {
    flex: 2,
  },
  orderDetails: {flex: 4},
  image: {
    height: '100%',
    width: WIDTH,
  },
  orderButton: {
    backgroundColor: colors.buttons,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
  },
});
