import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Button from '../components/Button'

export default class HomeScreen extends React.Component {
  handlePress(num) {
    console.log(num)
  }
  renderButtons() {
    return Array.from(Array(10).keys()).map(number => {
      const num = number + 1
      return (
        <Button
          key={`button${num}`}
          onPress={this.handlePress.bind(this, num)}
          label={`${num}`}
          color="#FFFFFF"
          backgroundColor="#baffc9"
          accessibilityLabel={`Choose rating of ${num}`}
        />
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          {this.renderButtons()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  button: {
    backgroundColor: '#baffc9'
  }
})
