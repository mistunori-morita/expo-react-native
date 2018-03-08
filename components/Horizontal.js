/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView
      horizontal={true}
      pagingEnabled={true}
      style={styles.container}>
        <View style={styles.outer}>
          <Text style={styles.innerText}>Welcome to with app</Text>
        </View>
        <View style={[styles.outer, styles.pink]}>
          <Text style={styles.innerText}>Welcome to with app</Text>
        </View>
        <View style={[styles.outer, styles.green]}>
          <Text style={styles.innerText}>Welcome to with app</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  outer: {
    backgroundColor: '#f00',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  pink: {
    backgroundColor: 'pink',
  },
  green: {
    backgroundColor: 'green',
  },
  innerText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold'
  }
});
