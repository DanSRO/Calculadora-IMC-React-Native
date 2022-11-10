import React, { useState } from 'react';
import {StyleSheet,Text,View, TouchableOpacity, TextInput} from 'react-native';

export default function CalculaIMC(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura/100;
    const imc = peso/(alt*alt);

    if(imc < 18.6){
      alert('Abaixo do peso ideal.' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Peso ideal' + imc.toFixed(2));
    }else if(imc >= 24.90 && imc < 34.90){
      alert('Levemente acima do peso ideal' + imc.toFixed(2));
    }
  }

return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput 
      style={styles.input}
      value={peso}
      onChangeText={(peso)=> setPeso(peso)}
      placeholder='Peso (kg)'
      keyboardType='numeric'
      />

      <TextInput 
      style={styles.input}
      value={altura}
      onChangeText={(peso)=> setAltura(altura)}
      placeholder='Altura (cm)'
      keyboardType='numeric'
      />
      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 25
  },
  input: {
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFF',
    fontSize: 23,
  }, 
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
  }, 
  buttonText:{
    color: '#FFF',
    fontSize: 25,
  }
});