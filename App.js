import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Superman from './components/Superman';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am a Component</Text>
        <Superman />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
