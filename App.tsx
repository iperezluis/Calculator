import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadoraScreen} from './src/screen/CalculadoraScreen';
import {styles} from './src/theme/AppTheme';

//aqui vamos a usar la propiedad de StatusBar que significa el estado de las barras superiores del dispositivo en donde aparece la bateria, hora etc
//para que se va tambien en ios agregramos dentro barStyle
const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
