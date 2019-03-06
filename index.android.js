import React, {Component} from 'react';
import {Text, View, Button, AppRegistry, Image, TouchableOpacity} from 'react-native';

const Estilos = {
    principal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    botao: {
      backgroundColor: '#538530',
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop: 20
    },
    textoBotao: {
      color: '#fff'
    }
};

const gerarFrase = () => {

  var num = Math.random();
  num = Math.floor(num * 3);

  var msgs = ['Frase 1', 'Frase 2', 'Frase 3'];

  var escolhida = msgs[num];
  alert(escolhida);

}


const App = () => {

    const {principal, botao, textoBotao} = Estilos;

    return (
      <View style={principal}>
        <Image source= { require('./img/logo.png') } />
        <TouchableOpacity style={botao} onPress = {gerarFrase}>
                                       
          <Text style={textoBotao}>Gerar frase</Text>
        </TouchableOpacity>
      </View>
    );
};

AppRegistry.registerComponent('frases_do_dia', () => App);