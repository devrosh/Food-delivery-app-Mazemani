import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../../global/styles';
import {restaurantData, menu} from '../../global/Data';
import {TabBar, TabView} from 'react-native-tab-view';
import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
} from './MenuTabs';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const MenuDetailsScreen = ({navigation, route}) => {
  const [routes] = useState(menu);
  const [index, setIndex] = useState(0);

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

  const renderScene = ({route}) => {
    switch (route.key) {
      case 1:
        return <Route1 navigation={navigation} />;
      case 2:
        return <Route2 name={navigation} />;
      case 3:
        return <Route3 name={navigation} />;
      case 4:
        return <Route4 name={navigation} />;
      case 5:
        return <Route5 name={navigation} />;
      case 6:
        return <Route6 name={navigation} />;
      case 7:
        return <Route7 name={navigation} />;
      case 8:
        return <Route8 name={navigation} />;

      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        tabBarPosition={'top'}
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default MenuDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
  },
  tabBar: {
    backgroundColor: colors.buttons,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  tab: {
    width: SCREEN_WIDTH / 3,
  },
  icon: {
    marginRight: 30,
  },
});
