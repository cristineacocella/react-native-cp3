import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class Botao extends React.Component {
  state = {
    valor: "0",
    imagem: 2,
  };

  handlePress = () => {
    const { onPress } = this.props;
    if (this.props.nome == "Zerar") {
      this.setState({ valor: "0" });
      onPress(this.state.valor);
      return null;
    }
    onPress();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.botao} onPress={this.handlePress}>
          <Text style={styles.txtBotao}>{this.props.nome}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  botao: {
    backgroundColor: "steelblue",
    borderRadius: 5,
    padding: 7,
  },
  txtBotao: {
    color: "white",
    fontSize: 18,
  },
});
