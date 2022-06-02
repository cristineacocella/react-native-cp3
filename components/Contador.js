import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

// import formatCurrency from '../utils/mask'

export default class Contador extends React.Component {
  render() {
    const { valor } = this.props;
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.text}>Contador</Text>
        <Text
          style={styles.input}
          // onChangeText={this.handleChangeText}
        >
          {valor}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    flex: 1,
    textAlign: "right",
    marginRight: 10,
    fontSize: 26,
  },
  input: {
    flex: 1,
    backgroundColor: "gray",
    color: "black",
    paddingHorizontal: 10,
    height: 30,
    fontSize: 20,
    textAlign: "right",
    borderRadius: 10,
  },
});
