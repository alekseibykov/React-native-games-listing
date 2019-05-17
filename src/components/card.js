import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Image
        style={{width: '100%', height: 520}}
        source={{uri: props.game.image}}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1
  }
};

export default Card;
