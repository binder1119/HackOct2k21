/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, Image, FlatList } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Third Item',
  },
  {
    id: '5',
    title: 'Third Item',
  },
];

const Item = ({ title, imgPath }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image
      style={styles.tinyLogo}
      source={imgPath}
    />
  </View>
);

const App = () => {
  const renderItem = ({ item, index }) => {
    let imgPath = require("./assets/1.jpg")
    return (
      <Item title={item.title} imgPath={imgPath} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        scrollEnabled={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
