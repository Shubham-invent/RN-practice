import React from 'react';
import Navigator from './routes';
import {StatusBar, View} from 'react-native';
import {THEME} from './theme';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;
function StatusBarPlaceHolder() {
  return (
    <View
      style={{
        width: '100%',
        height: STATUS_BAR_HEIGHT,
        backgroundColor: THEME.colors.limegreen,
      }}>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBarPlaceHolder />

      <Navigator />
    </>
  );
};

export default App;
