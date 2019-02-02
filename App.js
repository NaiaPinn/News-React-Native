import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  ListaNoticias  from './components/lista-noticias/ListaNoticias';
// import {ListaNoticias} from './components/Lista-Noticias'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ListaNoticias/>
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
  },
});
