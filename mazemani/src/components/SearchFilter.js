import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {categoryData} from '../global/Data';
import {colors} from '../global/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const SearchFilter = ({data, input, setInput}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchList}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          if (input === '') {
            return null;
          }
          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SearchResultsScreen', {item: item.name});
                }}>
                <Text style={styles.searchItem}>{item.name}</Text>
              </TouchableOpacity>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  searchList: {
    marginHorizontal: 15,
  },
  searchItem: {
    marginVertical: 10,
    fontSize: 16,
    //  fontWeight: 'bold',
    color: colors.grey1,
  },
});
