import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default class Lampada extends React.Component {
  render() {
    const { imagem } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={imagem}
          resizeMode="contain"
        ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});
