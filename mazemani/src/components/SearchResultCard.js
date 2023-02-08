import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import {productsData} from '../global/Data';
import SearchResultSlider from './SearchResultSlider';
import {useNavigation} from '@react-navigation/native';

const SearchResultCard = ({
  restaurantName,
  businessAddress,
  numberOfReview,
  discountPercent,
  farAway,
  averageReview,
  images,
  screenWidth,
  onPressCard,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{marginVertical: 5}}>
      <TouchableOpacity style={styles.cardContainer} onPress={onPressCard}>
        <View style={{...styles.cardView, width: screenWidth}}>
          <Image
            style={styles.cardImage}
            source={{uri: images}}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
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
      </TouchableOpacity>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={productsData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SearchResultSlider
              image={item.image}
              price={item.price}
              name={item.name}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SearchResultCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',

    borderRadius: 10,
  },
  cardView: {
    borderRadius: 5,
    padding: 7,
    // width: SCREEN_WIDTH,
  },
  cardImage: {
    height: 150,
    width: '100%',
    borderRadius: 10,
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
