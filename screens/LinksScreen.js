import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import RangePicker from '../components/RangePicker'

const data = [1, 3, 4, 10, 8, 7, 5, 6, 7, 1, 2, 3, 4, 5, 7, 8]

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Stats',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <RangePicker data={data} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
