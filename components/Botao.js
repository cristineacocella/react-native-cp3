import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class Botao extends React.Component {
  state = {
    valor: 0,
    imagem: "",
  };

  handleZerar = (text1, text2) => {
    const { onPress } = this.props;
    console.log(text1);
    console.log(text2);
    const valor = 0;
    const imagem = "apagada";
    this.setState({ valor, imagem });
    onPress(valor, imagem);
  };

  handleIncrement = () => {
    const { onPress } = this.props;
    const { valor } = this.state;
    const newValor = valor + 1;
    this.setState({ valor: newValor });
    onPress(newValor);
  };

  handleDecrement = () => {
    const { onPress } = this.props;
    const { valor } = this.state;
    const newValor = valor - 1;
    this.setState({ valor: newValor });
    onPress(newValor);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.botao} onPress={this.handleZerar}>
          <Text style={styles.txtBotao}>Zerar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={this.handleIncrement}>
          <Text style={styles.txtBotao}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={this.handleDecrement}>
          <Text style={styles.txtBotao}>Decrementar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  botao: {
    backgroundColor: "steelblue",
    borderRadius: 5,
    padding: 7,
    marginLeft: 15,
  },
  txtBotao: {
    color: "white",
    fontSize: 18,
  },
});
