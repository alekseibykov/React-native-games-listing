import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,

  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadoColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  }
};

export default Header;
