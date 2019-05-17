import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, TouchableOpacity } from 'react-native';

const Card = (props) => {
  const handleClick = () => {
    Linking.canOpenURL(props.game.url).then(supported => {
      if (supported) {
        Linking.openURL(props.game.url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textSyle}>
        {props.game.title}
      </Text>
      <Image
        style={{width: '100%', height: 500}}
        source={{uri: props.game.image}}
        resizeMode="contain"
      />
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.text}>Add to cart</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  text: {
    fontSize: 18,
    fontFamily: 'ProximaNova-Regular',
    color: '#FFFFFF',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingBottom: 20,
    paddingTop: 19,
    margin: 10,
    backgroundColor: "#2196F3",
  },
  viewStyle: {
    flex: 1
  },
  textSyle: {
    fontFamily: 'ProximaNova-Regular',
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 24,
    alignSelf: 'center',
  }
};

export default Card;
