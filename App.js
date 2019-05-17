import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Header from './src/components/header';
import List from './src/components/list';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    return fetch('https://rest-api-images.herokuapp.com/games')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    // console.log(this.state.dataSource);
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Header headerText={'Games'} />
        <List games={this.state.dataSource} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'ProximaNova-Regular',
    backgroundColor: '#FFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#e1c345',
    marginBottom: 5,
  },
});
