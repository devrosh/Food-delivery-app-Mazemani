import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../global/styles';
import {Icon} from 'react-native-elements';
import {categoryData} from '../../global/Data.js';
import FoodCard from '../../components/FoodCard';
import {restaurantData} from '../../global/Data.js';
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setDelivery(true);
            }}>
            <View
              style={{
                backgroundColor: delivery ? colors.buttons : colors.grey5,
                height: 35,
                width: 100,
                borderRadius: 17,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 5,
                elevation: 2,
                shadowOpacity: 0.2,
                shadowColor: '#444444',
              }}>
              <Text
                style={{
                  color: delivery ? colors.cardBackground : colors.grey2,
                  fontFamily: 'OpenSans-Regular',
                }}>
                Delivery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDelivery(false);
            }}>
            <View
              style={{
                backgroundColor: delivery ? colors.buttons : colors.grey5,
                height: 35,
                width: 100,
                borderRadius: 17,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 11,
                shadowOpacity: 0.2,
                shadowRadius: 6.68,
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowColor: '#333333',
              }}>
              <Text
                style={{
                  color: delivery ? colors.cardBackground : colors.grey2,
                  fontFamily: 'OpenSans-Regular',
                }}>
                Pick Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            elevation: 11,
            shadowOpacity: 0.2,
            shadowRadius: 6.68,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowColor: '#333333',
          }}>
          <View style={styles.filterView}>
            <View style={styles.addressView}>
              <Icon
                type="material-community"
                name="map-marker"
                size={25}
                color={colors.grey3}
              />
              <Text style={{color: colors.grey1}}>22 Makhan Tole</Text>
            </View>
            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                size={30}
                color={colors.grey3}
                iconStyle={{paddingLeft: 5}}
              />
              <Text style={{color: colors.grey1, paddingHorizontal: 10}}>
                Now
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <Icon
              type="material-community"
              name="tune"
              size={30}
              color={colors.grey3}
            />
          </View>
        </View>
        <View style={styles.categoryView}>
          <Text style={styles.categoryText}>Explore By Category</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable onPress={() => setIndexCheck(item.id)}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.categoryItemSelected}
                      : {...styles.categoryItem}
                  }>
                  <Image
                    source={item.image}
                    style={{height: 60, width: 60, borderRadius: 30}}
                  />

                  <Text
                    style={
                      indexCheck === item.id
                        ? {...styles.itemTextSelected}
                        : {...styles.itemText}
                    }>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.categoryView}>
          <Text style={styles.categoryText}>Free delivery now</Text>
        </View>
        <View>
          <View style={styles.countDown}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'OpenSans-SemiBold',
                color: '#010743',
              }}>
              Offer ends in
            </Text>
            <CountDown
              digitStyle={{backgroundColor: colors.buttons}}
              digitTxtStyle={{color: colors.grey5}}
              timeLabelStyle={{color: colors.grey2}}
              timeToShow={['H', 'M', 'S']}
              until={3600}
              style={{paddingLeft: 20}}
            />
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurantData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  farAway={item.farAway}
                />
              </TouchableOpacity>
            )}
          />
          <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Promotions available</Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={restaurantData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  farAway={item.farAway}
                />
              )}
            />
          </View>

          <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Restaurants in your area</Text>
          </View>
          <View>
            {restaurantData.map((item, index) => (
              <FoodCard
                key={item.id}
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                farAway={item.farAway}
                style={{marginRight: 10}}
              />
            ))}
          </View>
          <View>
            <Icon
              type="material-community"
              name="map-marker"
              size={25}
              iconStyle={styles.mapIcon}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffecec',
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20,
    height: 35,
    width: '80%',
    borderRadius: 25,
    backgroundColor: colors.grey5,
  },
  addressView: {flexDirection: 'row', alignItems: 'center'},
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
  },
  categoryView: {
    backgroundColor: colors.grey5,
  },
  categoryText: {
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.buttons,
    padding: 5,
    backgroundColor: '#ffecec',
  },
  categoryItem: {
    height: 100,
    width: 80,
    backgroundColor: colors.grey5,
    borderRadius: 30,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 11,
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#333333',
  },
  categoryItemSelected: {
    height: 100,
    width: 80,
    backgroundColor: colors.buttons,
    borderRadius: 30,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 11,
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#333333',
  },
  itemText: {
    color: '#010743',
    fontFamily: 'OpenSans-SemiBold',
    marginTop: 5,
  },
  itemTextSelected: {
    color: colors.cardBackground,
    fontFamily: 'OpenSans-SemiBold',
    marginTop: 5,
  },
  countDown: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  mapIcon: {
    position: 'absolute',
  },
});
