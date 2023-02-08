import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import Data from '../global/Data';
import {colors} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FoodCard = ({
  onPressFoodCard,
  restaurantName,
  deliveryAvailable,
  businessAddress,
  discountAvailable,
  numberOfReview,
  discountPercent,
  farAway,
  averageReview,
  images,
  screenWidth,
}) => {
  return (
    <SafeAreaView styles={styles.container}>
      <TouchableOpacity style={styles.cardContainer}>
        <View style={{...styles.cardView, width: screenWidth}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.cardImage}
              source={{uri: images}}
              resizeMode="cover"
            />
          </View>

          <View style={styles.cardDetails}>
            <View>
              <Text style={styles.restaurantName}>{restaurantName}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="room"
                  type="material"
                  size={22}
                  color={colors.buttons}
                />
                <Text
                  style={{
                    fontSize: 14,

                    color: colors.grey3,
                  }}>
                  {farAway} Min
                </Text>
              </View>
              <View style={{flex: 5}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.grey3,

                    borderLeftWidth: 1,
                  }}>
                  {businessAddress}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.review}>
            <Text
              style={{
                color: colors.cardBackground,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {averageReview}
            </Text>
            <Text
              style={{
                color: colors.cardBackground,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              {numberOfReview} reviews
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  cardView: {},
  imageContainer: {
    padding: 5,
  },
  cardDetails: {
    borderBottomLeftRadius: 10,
  },
  cardImage: {
    height: 150,
    borderRadius: 15,
  },
  restaurantName: {
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',

    marginVertical: 5,
    marginHorizontal: 5,
    color: '#010743',
  },
  review: {
    position: 'absolute',
    top: 10,
    right: 25,
    backgroundColor: 'rgba(52,52,52,0.3)',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
