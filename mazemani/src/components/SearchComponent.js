import {StyleSheet, Text, TextInput, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import SearchFilter from './SearchFilter';
import {categoryData, SEARCHDATA} from '../global/Data';

const SearchComponent = () => {
  const [input, setInput] = useState('');
  console.log(input);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <View>
          <Icon
            name="magnify"
            type="material-community"
            size={32}
            color={colors.buttons}
            iconStyle={styles.searchIcon}
          />
        </View>
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          placeholder="What are you looking for?"
          style={{marginLeft: 20}}
        />
      </View>
      <SearchFilter data={categoryData} input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    elevation: 12,
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    textShadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#333333',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,

    borderWidthColor: colors.grey2,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchText: {
    color: colors.grey1,
    marginLeft: 10,
    fontSize: 15,
  },
});
