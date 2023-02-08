import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import React from 'react';
import SearchComponent from '../../components/SearchComponent';
import {categoryData} from '../../global/Data';
import {colors} from '../../global/styles';
import {useNavigation} from '@react-navigation/native';

const WIDTH = Dimensions.get('window').width;

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{marginVertical: 30, marginHorizontal: 15}}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'OpenSans-Bold',
            color: colors.grey2,
          }}>
          Find and order your favorite dish
        </Text>
      </View>
      <SearchComponent />
      <View style={{margin: 10}}>
        <FlatList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={categoryData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.category}
              onPress={() => {
                navigation.navigate('SearchResultsScreen', {item: item.name});
              }}>
              <ImageBackground
                resizeMode="cover"
                source={item.image}
                imageStyle={styles.image}>
                <Text style={styles.text}>{item.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
          ListHeaderComponent={
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'OpenSans-SemiBold',
                margin: 10,
                color: colors.buttons,
              }}>
              Top Categories
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffecec',
  },
  image: {
    height: 170,
    width: 170,
    justifyContent: 'center',
    borderRadius: 15,
    position: 'relative',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.cardBackground,
    position: 'absolute',
    top: '45%',
    left: '35%',
  },
  category: {
    margin: 10,
  },
});
