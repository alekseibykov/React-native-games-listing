import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Card from "./card";

const List = (props) => {
  // console.log(props);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={props.games}
        renderItem={({item}) => <Card game={item}/>}
        keyExtractor={(item) => {
          return item.title;
        }}
      />
    </View>


    // <View style={styles.viewStyle}>
    //   {
    //     props.games.map((item, index) => {
    //       // console.log(item);
    //       return (
    //
    //         <Text>123, {item.title}, {item.publisher}</Text>
    //       );
    //     })
    //   }
    //
    // </View>
  );
};

const styles = {
  viewStyle: {

  }
};

export default List;
