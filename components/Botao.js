import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class Botao extends React.Component {
  state = {
    valor: 0,
    imagem: "",
  };

  handleButton = () => {
    const { onPress, nome, value } = this.props;
    let valor = 0;
    let imagem = 2;
    if (nome == "Zerar") {
      valor = 0;
      imagem = 2;
    } else if (nome == "Incrementar") {
      valor = value + 1;
    } else if (nome == "Decrementar") {
      valor = value - 1;
    }

    if (valor % 3 == 0 && valor != 0) {
      imagem = 1;
    }
    console.log(valor);
    console.log(valor);
    this.setState({ valor, imagem });
    onPress(valor, imagem);
  };

  handleIncrement = () => {
    const { onPress } = this.props;
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
        <TouchableOpacity style={styles.botao} onPress={this.handleButton}>
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
