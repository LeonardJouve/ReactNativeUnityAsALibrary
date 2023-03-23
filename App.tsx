import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import UnityView from './components/UnityView';

const App = () => (
    <View style={style.wrapper}>
        <UnityView style={style.unityView}/>
    </View>
);


const style = StyleSheet.create({
  wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  unityView: {
      flex: 1,
      width: '100%',
      height: '100%',
  },
});

export default App;
