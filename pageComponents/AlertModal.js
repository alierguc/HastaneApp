import React, { Component } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import Loader from "react-native-modal-loader";

export default class App extends Component {
  state = {
    isLoading: false
  };

  showLoader = () => {
    this.setState({ isLoading: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        <Button title="Press me!" onPress={this.showLoader} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});