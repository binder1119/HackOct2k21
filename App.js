/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, Linking, StyleSheet, Text, Image, FlatList, Button, Alert } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Tomato',
    imagePath: require("./assets/1.jpg"),
    description: "Fresh tomatoes for you.",
    price: "100/-"
  },
  {
    id: '2',
    title: 'Potato chilli',
    imagePath: require("./assets/2.jpg"),
    description: "Crispy potatoes in your plate.",
    price: "1000/-"
  },
  {
    id: '3',
    title: 'Egg salami',
    imagePath: require("./assets/3.jpg"),
    description: "Yummy egg salami dish",
    price: "1100/-"
  },
  {
    id: '4',
    title: 'Choco cookies',
    imagePath: require("./assets/4.jpg"),
    description: "Yum yum",
    price: "200/-"
  },
  {
    id: '5',
    title: 'Paneer tikka',
    imagePath: require("./assets/5.jpg"),
    description: "Paneer tikka at your table.",
    price: "600/-"
  },
  {
    id: '6',
    title: 'Yellow Pepper',
    imagePath: require("./assets/6.jpg"),
    description: "Fresh from the farms",
    price: "900/-"
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
      <Text style={[styles.title, { fontWeight: 'bold', fontSize: 22 }]}>{title}</Text>
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

  let phoneNumber = `telprompt:${'7696401838'}`

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Food Market</Text>
      <FlatList
        scrollEnabled={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       <Button
       style={styles.btn}
          title="Call Us"
          onPress={() => {
            Linking.openURL('tel:+917696401838');} 
          }
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  title: {
    fontSize: 20,
    paddingLeft: 15
  },
  img: {
    width: 120,
    height: 120
  },
  btn: {
height:50
  },
  textView: {
    justifyContent: "center",
  },
  header: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: "grey",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  }
});

export default App;
