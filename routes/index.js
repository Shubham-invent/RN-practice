import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import ReciepeScreen from '../screens/ReciepeScreen';
import RestaurentScreen from '../screens/RestaurentScreen';
import {THEME} from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconNew from 'react-native-vector-icons/Entypo';
import NewIcon from 'react-native-vector-icons/MaterialIcons';

const TabNavigator = createBottomTabNavigator({
  Reciepe: {
    screen: ReciepeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}) => (
        <IconNew
          name="news"
          size={20}
          color={focused ? THEME.colors.limegreen : 'rgba(0, 0, 0, 0.18)'}
          // style={{marginTop: -0, padding: 10}}
        />
      ),
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
      },
    },
  },
  Restaurents: {
    screen: RestaurentScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}) => (
        <NewIcon
          name="restaurant"
          size={20}
          color={focused ? THEME.colors.limegreen : 'rgba(0, 0, 0, 0.18)'}
          // style={{marginTop: -0, padding: 10}}
        />
      ),
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
      },
    },
  },
});
const AppNavigator = createStackNavigator(
  {
    Home: TabNavigator,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.colors.limegreen,
        elevation: 0,
        shadowOpacity: 0,
        height: 40,
        flex: 1,
      },
      title: 'Recipes',
      headerTintColor: THEME.colors.limegreen,
      headerTitleStyle: {
        fontWeight: '400',
        color: '#ffffff',
        alignSelf: 'flex-start',
        marginLeft: -50,
        flex: 1,
        textAlign: 'left',
        width: 375,
        height: 35,
        fontSize: 30,
      },
      headerRight: (
        <Icon
          name="search"
          size={20}
          color="white"
          style={{marginTop: -70, padding: 10}}
        />
      ),
    },
  },
);

export default createAppContainer(AppNavigator);
