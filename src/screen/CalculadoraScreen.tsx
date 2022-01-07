import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import {BotonCal} from '../components/BotonCal';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/AppTheme';

export const CalculadoraScreen = () => {
  let {
    numeroAnterior,
    numero,
    valorTexto,
    clean,
    Delete,
    positivoNegativo,
    sumar,
    restar,
    multiplicar,
    dividir,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultPequeño}>{numeroAnterior}</Text>
      )}
      {/* //para que no se monte una linea encima de la otra usamos usamos numberOflines y usamos adjustsFontSizeToFit para que se vayan ajustando el fontSize automaticamente
       */}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCal text="C" color="g" accion={() => clean()} />
        <BotonCal text="+/-" color="g" accion={positivoNegativo} />
        <BotonCal text="del" color="g" accion={Delete} />
        <BotonCal text="%" color="n" accion={dividir} />
      </View>
      <View style={styles.fila}>
        <BotonCal text="7" color="b" accion={valorTexto} />
        <BotonCal text="8" color="b" accion={valorTexto} />
        <BotonCal text="9" color="b" accion={valorTexto} />
        <BotonCal text="x" color="n" accion={multiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCal text="4" color="b" accion={valorTexto} />
        <BotonCal text="5" color="b" accion={valorTexto} />
        <BotonCal text="6" color="b" accion={valorTexto} />
        <BotonCal text="-" color="n" accion={restar} />
      </View>
      <View style={styles.fila}>
        <BotonCal text="1" color="b" accion={valorTexto} />
        <BotonCal text="2" color="b" accion={valorTexto} />
        <BotonCal text="3" color="b" accion={valorTexto} />
        <BotonCal text="+" color="n" accion={sumar} />
      </View>
      <View style={styles.fila}>
        <BotonCal text="0" color="b" ancho accion={valorTexto} />
        <BotonCal text="." color="b" accion={valorTexto} />
        <BotonCal text="=" color="n" accion={calcular} />
      </View>
    </View>
  );
};
