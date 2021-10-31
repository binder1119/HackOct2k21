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
    imagePath: require("./assets/1.jpg"),
    description:"ttttttt",
    price:"100/-"
  },
  {
    id: '2',
    title: 'Second Item',
    imagePath: require("./assets/2.jpg"),
    description:"ttttttt",
    price:"100/-"
  },
  {
    id: '3',
    title: 'First Item',
    imagePath: require("./assets/3.jpg"),
    description:"ttttttt",
    price:"100/-"
  },
  {
    id: '4',
    title: 'Second Item',
    imagePath: require("./assets/4.jpg"),
    description:"ttttttt",
    price:"100/-"
  },
  {
    id: '5',
    title: 'First Item',
    imagePath: require("./assets/5.jpg"),
    description:"ttttttt",
    price:"100/-"
  },
  {
    id: '6',
    title: 'Second Item',
    imagePath: require("./assets/6.jpg"),
    description:"ttttttt",
    price:"100/-"
  },
];

const Item = ({ title, imgPath, description, price }) => (
  <View style={styles.itemView}>
    <View style={styles.imgView}>
      <Image
        style={styles.img}
        source={imgPath}
      />
    </View>

    <View style={styles.textView}>
      <Text style={[styles.title,{fontWeight:'bold', fontSize:22}]}>{title}</Text>
      <Text style={styles.title}>{description}</Text>
      <Text style={styles.title}>{price}</Text>
    </View>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => {
    return (
      <Item title={item.title} imgPath={item.imagePath} description={item.description} price={item.price} />
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
  itemView: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:"grey"
  },
  title: {
    fontSize: 20,
    paddingLeft:15
  },
  img:{
width:120,
height:120
  },
  imgView:{

  },
  textView:{
justifyContent:"center",
  }
});

export default App;
