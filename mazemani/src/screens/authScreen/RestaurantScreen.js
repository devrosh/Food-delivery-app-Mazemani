import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RestaurantHeader from '../../components/RestaurantHeader';
import {restaurantData} from '../../global/Data';
import {colors} from '../../global/styles';
import {Icon} from 'react-native-elements';
import {TabView, TabBar} from 'react-native-tab-view';
import MenuScreen from './RestaurantTabs/MenuScreen';
import InfoScreen from './RestaurantTabs/InfoScreen';
import ReviewsScreen from './RestaurantTabs/ReviewsScreen';
import GalleryScreen from './RestaurantTabs/GalleryScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

const RestaurantScreen = ({navigation, route}) => {
  const {id, restaurant} = route.params;

  const initialLayout = SCREEN_WIDTH;
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Menu'},
    {key: 'second', title: 'Info'},
    {key: 'third', title: 'Reviews'},
    {key: 'fourth', title: 'Gallery'},
  ]);
  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: colors.cardBackground}}
        tabStyle={styles.tab}
        scrollEnabled={true}
        style={styles.tabBar}
        labelStyle={styles.label}
      />
    );
  };
  const updateRoute1 = () => {
    return (
      <View>
        <Text> route 1</Text>
      </View>
    );
  };

  const menuPressed = () => {
    navigation.navigate('menuDetails');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RestaurantHeader id={id} navigation={navigation} />
        <View style={{backgroundColor: '#ffecec', padding: 10}}>
          {restaurantData[id].discount && (
            <View style={styles.discountInfo}>
              <Text style={styles.discountText}>
                Get {restaurantData[id].discount}% discount on food total
              </Text>
            </View>
          )}
          <View style={styles.restaurantinfoContainer}>
            <View style={styles.view1}>
              <Text style={styles.text1}>
                {restaurantData[id].restaurantName}
              </Text>
              <Text style={styles.text2}>{restaurantData[id].foodType}</Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Icon
                  name="star"
                  type="material-community"
                  size={18}
                  color={'gold'}
                />
                <Text style={styles.text3}>
                  {restaurantData[id].averageReview}
                </Text>

                <Text style={styles.text4}>
                  ( {restaurantData[id].numberOfReview})
                </Text>
                <Icon
                  name="map-marker"
                  type="material-community"
                  size={15}
                  color={colors.grey2}
                />
                <Text style={styles.text5}>
                  {restaurantData[id].farAway} Km Away
                </Text>
              </View>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text6}>Collect</Text>
              <View style={styles.collecttimeView}>
                <Text style={styles.text7}>
                  {restaurantData[id].collectTime}
                </Text>
                <Text style={styles.text8}>min</Text>
              </View>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text9}>Delivery time</Text>
              <View style={styles.deliverytimeView}>
                <Text style={styles.text10}>
                  {restaurantData[id].deliveryTime}
                </Text>
                <Text style={styles.text11}>min</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tabContainer}>
          <TabView
            navigationState={{index, routes}}
            renderScene={updateRoute1}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition={'top'}
          />
          {index === 0 && <MenuScreen onPress={menuPressed} />}
          {index === 1 && <InfoScreen />}
          {index === 2 && <ReviewsScreen />}
          {index === 3 && <GalleryScreen />}
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.cart}>
          <Text style={styles.cartText}>View Cart</Text>
          <Text style={styles.cartText}>0</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffecec'},
  discountText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.buttons,
    marginBottom: 5,
  },
  restaurantinfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.grey1,
    marginBottom: 5,
  },
  text2: {
    fontSize: 15,
    color: colors.grey2,
    marginBottom: 5,
  },
  text3: {
    color: colors.grey2,
    marginHorizontal: 5,
  },
  text4: {
    color: colors.grey2,
    marginRight: 5,
  },
  text5: {
    color: colors.grey2,
    marginLeft: 5,
  },
  text6: {
    fontWeight: 'bold',
    color: colors.grey1,
    paddingBottom: 5,
  },
  text7: {
    textAlign: 'center',
  },
  text8: {textAlign: 'center'},
  text9: {
    fontWeight: 'bold',
    color: colors.grey1,
    paddingBottom: 5,
  },
  text10: {textAlign: 'center', color: colors.cardBackground},
  text11: {textAlign: 'center', color: colors.cardBackground},

  collecttimeView: {
    paddingVertical: 5,
  },
  deliverytimeView: {
    width: 50,
    backgroundColor: colors.buttons,
    paddingVertical: 5,
    borderRadius: 25,
    alignSelf: 'center',
  },
  tabContainer: {},
  tab: {
    width: SCREEN_WIDTH / 4,
  },

  tabBar: {
    backgroundColor: colors.buttons,
  },
  label: {
    fontWeight: 'bold',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.buttons,
    padding: 10,
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.cardBackground,
  },
  icon: {
    color: colors.grey1,
  },
});
