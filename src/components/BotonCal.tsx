import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/AppTheme';

interface Props {
  text: string;
  color?: 'g' | 'n' | 'b';
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}
export const BotonCal = ({text, color, ancho = false, accion}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(text)}>
      <View
        style={[
          styles.boton,
          color === 'n'
            ? styles.naranja
            : color === 'g'
            ? styles.gris
            : styles.negro,
          ancho ? styles.ancho : styles.boton,
        ]}>
        <Text
          style={[
            styles.botonTexto,
            color === 'g' ? styles.grisText : styles.botonTexto,
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
