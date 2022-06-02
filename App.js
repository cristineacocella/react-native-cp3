import * as React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";

import Contador from "./components/Contador";
import Botao from "./components/Botao";
import Lampada from "./components/Lampada";

import acesa from "./assets/acesa.jpeg";
import apagada from "./assets/apagada.jpeg";
export default class App extends React.Component {
  state = {
    valor: "3",
    imagem: apagada,
  };

  render() {
    const { valor, imagem } = this.state;
    return (
      <View style={styles.container}>
        <Contador valor={valor} />
        <View style={styles.buttonContainer}>
          <Botao
            nome="Zerar"
            onPress={(valor) => {
              this.setState({ valor, imagem: apagada });
            }}
          />
          <Botao
            nome="Incrementar"
            onPress={() => this.setState({ imagem: acesa })}
          />
          <Botao
            nome="Decrementar"
            onPress={() => this.setState({ imagem: apagada })}
          />
        </View>
        <Lampada imagem={imagem} />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 30,
    justifyContent: "flex-end",
  },
});
