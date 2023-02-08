import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';

import {restaurantData} from '../../global/Data';
import SearchResultCard from '../../components/SearchResultCard';
import {colors} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultsScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: 15}}>
        <Text style={styles.searchText}>
          {restaurantData.length} results for {route.params.item}
        </Text>
      </View>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={restaurantData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <SearchResultCard
            screenWidth={SCREEN_WIDTH * 0.95}
            restaurantName={item.restaurantName}
            images={item.images}
            numberOfReview={item.numberOfReview}
            averageReview={item.averageReview}
            farAway={item.farAway}
            businessAddress={item.businessAddress}
            onPressCard={() => {
              navigation.navigate('RestaurantScreen', {
                id: index,
                restaurant: item.restaurantName,
              });
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default SearchResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    marginVertical: 10,

    backgroundColor: '#ffecec',
  },
  searchText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.grey1,
  },
});
