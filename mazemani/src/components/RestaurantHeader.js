import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import {restaurantData} from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;

const RestaurantHeader = ({navigation, id}) => {
  const [iconPressed, setIconPressed] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: restaurantData[id].images,
        }}
        resizeMode="cover"
        imageStyle={styles.image}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}>
          <Icon
            name="arrow-left"
            type="material-community"
            size={28}
            iconStyle={styles.icon}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Icon
            name="favorite-border"
            type="material"
            size={28}
            iconStyle={styles.icon}
            onPress={() => {
              setIconPressed(!iconPressed);
            }}
            color={iconPressed ? colors.buttons : colors.cardBackground}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default RestaurantHeader;

const styles = StyleSheet.create({
  container: {height: 175},
  image: {
    height: 175,
    width: SCREEN_WIDTH,
  },
  icon: {
    margin: 10,
  },
});
