import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ajax from './src/ajax'
import DealList from './src/DealList';



class App extends React.Component {
  async componentDidMount() {
    state = {
      deals: [],
    };
    const deals = await ajax.fetchInitialDeals();
    this.setState((prevState) => {
      return { deals} ;
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.deals.length > 0
          ? <DealList deals={this.state.deals} />
          : <Text style={styles.header}>Bakesale</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;