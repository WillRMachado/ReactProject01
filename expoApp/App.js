import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default class App extends React.Component {

  initialState = {
    data: [],
    isRefreshing: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>hidden</Text>
        <View>
          <SafeAreaView>
            {/* <Text>hidden</Text> */}

            <FlatList>

            </FlatList>
          </SafeAreaView>
        </View>
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
    padding: '15%',
  },
  conteudo: {
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 20
  },
  texto: {
    alignItems: "center",
    fontSize: 30,
    margin: 20,
    color: '#FF0000',
  },
  item: {
    alignItems: "center",
    backgroundColor: "#dcda44",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  conteudo: {
    color: "#333333"
  }
});
